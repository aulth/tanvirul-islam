import React, { useState, useContext, useEffect } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '../Spinner';
const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [password, setPassword] = useState('');
    const [processing, setProcessing] = useState(false)
    const [data, setData] = useState()
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleOnLogin = async (e) => {
        e.preventDefault()
        setProcessing(true)
        const res = await fetch("/api/admin/auth/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()
        if (json.success) {
            toast.success(json.msg)
            if (typeof window != undefined) {
                sessionStorage.setItem('admintoken', json.authtoken);
            }
        } else {
            toast.error(json.msg)
            if (typeof window != undefined) sessionStorage.clear();
        }
        setProcessing(false)
    }
    return (
        <>
            <Toaster position='top-right' />
            <div className="flex -z-10 flex-col items-center justify-center md:px-6  md:py-8 px-3 py-4 mx-auto md:h-[calc(100vh-64px-32px)] lg:py-0 ">
                <div className="w-full  rounded-lg md:shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Admin login
                        </h1>
                        <form className="space-y-4 md:space-y-4" onSubmit={handleOnLogin} action="#">
                            <div className='relative'>
                                <label htmlFor="id" className="block pass-label mb-2 text-sm font-medium text-gray-900 ">Id</label>
                                <input type="text" onChange={handleChange} name="id" id="id" placeholder="Id" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline focus:outline-green-500 block w-full p-2.5 pr-12" required />
                                <label htmlFor="password" className="block pass-label mb-2 mt-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type={showPass ? 'text' : 'password'} onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline focus:outline-green-500 block w-full p-2.5 pr-12" />
                                <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="md:h-[2.3rem] h-[2.6rem] w-10 absolute  right-0.5 rounded-r-lg  bottom-0.5 bg-gray-200 flex justify-center items-center">
                                    {showPass ? <BsEyeSlash /> : <BsEye />}
                                </button>
                            </div>
                            {
                                processing ?
                                    <div className="w-full flex justify-center"><Spinner /></div> :
                                    <button type="submit" className="w-full text-white  focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#46a999]">Sign in</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login