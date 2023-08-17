import Footer from "@/components/Footer";
import React, { useState, useContext, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { MdCancel, MdCheck, MdPassword } from "react-icons/md";
import Sidebar from "./Sidebar";
import { ContextData } from "@/context/context";
import { useRouter } from "next/router";
const Password = () => {
  const { toggleProfileMenu, login } = useContext(ContextData);
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({});
  const [changeDetected, setChangeDetected] = useState(false);

  const router = useRouter();
  const handleOnChange = (e) => {
    setChangeDetected(true);
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login");
  }
  const handleOnCancel = (e)=>{
    e.preventDefault();
    setData({oldPassword:"", newPassword:""});
    setChangeDetected(false)
  }
  useEffect(() => {
    if (!login) {
      router.push('/auth/login');
    }
  },)

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between ">
          <h2 className="font-bold text-xl">Change Password</h2>
          <button className="p-2 border rounded-sm md:hidden" onClick={toggleProfileMenu}><BiMenu /></button>
        </div>
        <hr className="mt-2" />
        <div className="w-full grid gap-2 grid-cols-6 mt-4">
          <Sidebar />
          <div className="md:col-span-5 col-span-6">
          {
              changeDetected &&
              <div className="flex justify-end gap-4">
                <button onClick={handleOnCancel} className="font-semibold text-sm border rounded-full aspect-square shrink-0 p-1 "><MdCancel /> </button>
                <button className="font-semibold text-sm border rounded-full aspect-square shrink-0 p-1 bg-[#46a999] text-white"><MdCheck /> </button>
              </div>
            }
            <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              <div className='relative'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
                <input type={showPass ? 'text' : 'password'} value={data.oldPassword} onChange={handleOnChange} name="oldPassword" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="md:h-[2.3rem] h-[2.6rem] w-10 absolute  right-0.5 rounded-r-lg  bottom-0.5 bg-gray-200 flex justify-center items-center">
                  {showPass ? <BsEyeSlash /> : <BsEye />}
                </button>
              </div>
              <div className='relative'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                <input type={showPass ? 'text' : 'password'} value={data.newPassword} onChange={handleOnChange} name="newPassword" id="newpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="md:h-[2.3rem] h-[2.6rem] w-10 absolute  right-0.5 rounded-r-lg  bottom-0.5 bg-gray-200 flex justify-center items-center">
                  {showPass ? <BsEyeSlash /> : <BsEye />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Password