import React, { useState } from 'react'
import { BiSolidUser, BiUser, BiUserX } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { MdEmail, MdPassword } from "react-icons/md";
import Link from 'next/link';
const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [data, setData] = useState({});
    const handleOnChange = (e)=>{
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value});
        console.log(data)
    }
    const handleLogin = async(e)=>{
        e.preventDefault();
        console.log("login");
    }
    return (
        <div className="container mx-auto p-8">
        <div className="container md:h-[calc(100vh-64px)] md:flex md:justify-center md:items-center mx-auto p-8">
                <h2 className="font-bold text-2xl">Login</h2>
                <p className="font-semibold text-sm text-gray-500 mt-1">Sign in to access your account and start using our app.</p>
                <form className="flex flex-col gap-3 mt-4">
                    <div className="w-full flex items-center border rounded">
                        <MdEmail className="text-sm p-3 w-10 bg-gray-200 h-10 rounded-l" /> <input type="email" onChange={handleOnChange} placeholder="Email" name="email" className="h-10 pl-2 w-full focus:outline-none focus:border-y focus:border-r border-gray-200" />
                    </div>
                    <div className="w-full flex items-center border rounded">
                        <MdPassword className="text-sm p-3 w-10 bg-gray-200 h-10 rounded-l" /> <input type={showPass ? 'text' : 'password'} onChange={handleOnChange} placeholder="Password" name="password" className="h-10 pl-2 w-full focus:outline-none focus:border-y border-gray-200" />
                        <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="h-10 w-10 bg-gray-200 flex justify-center items-center">
                            {showPass ? <BsEyeSlash /> : <BsEye />}
                        </button>
                    </div>
                    <div className="w-full flex items-center border rounded">
                        <button type="submit" className="h-10 pl-2 w-full font-semibold bg-[#46a999] text-white rounded">Sign up</button>
                    </div>
                    <p className="text-center text-sm text-gray-500">Not Registered yet?</p>
                    <div className="flex gap-2 justify-center items-center px-2 ">
                        <Link href="/auth/login" className="font-semibold text-sm border-[#46a999] text-[#46a999]">Login</Link>
                        <Link href="/auth/forgot-password" className="text-sm border-[#46a999] text-gray-500">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login