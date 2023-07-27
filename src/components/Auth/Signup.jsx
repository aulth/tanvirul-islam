import Image from 'next/image';
import React, { useState } from 'react'
import { BiSolidUser, BiUser, BiUserX } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { MdEmail, MdPassword } from "react-icons/md";
import { useSession, signIn, signOut } from 'next-auth/react';

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const { data, status } = useSession();
    if(status=='authenticated'){
        console.log('user is authenticated')
        console.log(data.user)
    }
    if(status=='unauthenticated'){
        console.log('user not authenticated');
        console.log(data)
    }
    return (
        <div className="container mx-auto p-8">
            <div className="w-full md:w-[468px] mx-auto md:border md:p-4 md:rounded md:shadow">
                <h2 className="font-bold text-2xl">Sign up</h2>
                <p className="font-semibold text-sm text-gray-500 mt-1">Please register with email and sign up to continue using our app</p>
                <div className="w-full grid  grid-cols-1 gap-2 my-4">
                    <button onClick={()=>{signIn('google')}} className="p-2 border rounded text-center justify-center text-sm flex gap-1 items-center font-semibold">
                    Continue with <Image src="/image/icon/google.png" width={15} height={15} className='mt-0.5' alt='google'/>
                    </button>
                </div>
                <form className="flex flex-col gap-3 mt-4">
                    <div className="w-full flex items-center border rounded">
                        <BiSolidUser className="text-sm p-3 w-10 bg-gray-200 h-10 rounded-l" /> <input type="text" placeholder="Name" name="name" className="h-10 pl-2 w-full focus:outline-none focus:border-y focus:border-r border-gray-200" />
                    </div>
                    <div className="w-full flex items-center border rounded">
                        <MdEmail className="text-sm p-3 w-10 bg-gray-200 h-10 rounded-l" /> <input type="email" placeholder="Email" name="email" className="h-10 pl-2 w-full focus:outline-none focus:border-y focus:border-r border-gray-200" />
                    </div>
                    <div className="w-full flex items-center border rounded">
                        <MdPassword className="text-sm p-3 w-10 bg-gray-200 h-10 rounded-l" /> <input type={showPass ? 'text' : 'password'} placeholder="Password" name="password" className="h-10 pl-2 w-full focus:outline-none focus:border-y border-gray-200" />
                        <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="h-10 w-10 bg-gray-200 flex justify-center items-center">
                            {showPass ? <BsEyeSlash /> : <BsEye />}
                        </button>
                    </div>
                    <div className="w-full flex items-center border rounded">
                        <button type="submit" className="h-10 pl-2 w-full font-semibold bg-[#46a999] text-white rounded">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup