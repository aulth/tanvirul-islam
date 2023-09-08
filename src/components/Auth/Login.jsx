import React, { useState, useContext, useEffect } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import users from '@/data/users';
import Link from 'next/link';
import { ContextData } from '@/context/context';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '../Spinner';
const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { setLogin, setUserData, login, fetchUser } = useContext(ContextData);
    const [data, setData] = useState({});
    const [processing, setProcessing] = useState(false)
    const router = useRouter();
    const handleOnChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!data.email) {
            return toast.error("Enter the email");
        }
        if (!data.password) {
            return toast.error("Enter the password");
        }
        setProcessing(true)
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        if (!json.success) {
            toast.error(json.msg)
            setProcessing(false)
            return;
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('authtoken', json.authtoken);
            toast.success(json.msg)
            setProcessing(false)
            fetchUser(json.authtoken)
            return;
        }
    };
    useEffect(() => {
        if (login) {
            router.push('/account');
        }
    },)

    return (
        <>
            <Toaster position='top-right' />
            <section className="md:bg-gray-50 bg-white dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center md:px-6  md:py-8 px-3 py-4 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg md:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-4" onSubmit={handleLogin} action="#">
                                <div>
                                    <label htmlFor="email" className="block email-label mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" onChange={handleOnChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="password" className="block pass-label mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type={showPass ? 'text' : 'password'} onChange={handleOnChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="md:h-[2.3rem] h-[2.6rem] w-10 absolute  right-0.5 rounded-r-lg  bottom-0.5 bg-gray-200 flex justify-center items-center">
                                        {showPass ? <BsEyeSlash /> : <BsEye />}
                                    </button>
                                </div>
                                {
                                    processing ?
                                        <div className="w-full flex justify-center"><Spinner /></div> :
                                        <button type="submit" className="w-full text-white  focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#46a999]">Sign in</button>
                                }
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don&apos;t have an account yet? <Link href="/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                                <Link href="/auth/forgot-password" className="text-sm text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login