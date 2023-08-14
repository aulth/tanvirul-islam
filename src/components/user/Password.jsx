import Footer from "@/components/Footer";
import React, { useState, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { MdCancel, MdCheck, MdPassword } from "react-icons/md";
import Sidebar from "./Sidebar";
import { ContextData } from "@/context/context";
const Password = () => {
  const { toggleProfileMenu } = useContext(ContextData);
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({});
  const handleOnChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login");
  }
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
            <div className="flex justify-end gap-4">
              <button className="font-semibold text-sm border rounded-full aspect-square shrink-0 p-1 "><MdCancel /> </button>
              <button className="font-semibold text-sm border rounded-full aspect-square shrink-0 p-1 bg-[#46a999] text-white"><MdCheck /> </button>
            </div>
            <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              <div className="w-full flex flex-col gap-1 justify-start">
                <label htmlFor="password " className="text-sm text-gray-500 font-semibold">Old Password</label>
                <div className="w-full flex items-center border rounded">
                  <input type={showPass ? 'text' : 'password'} onChange={handleOnChange} placeholder="Password" name="password" className="h-10 pl-2 w-full focus:outline-none focus:border border-gray-200" />
                  <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="h-10 w-10 bg-gray-200 flex justify-center items-center">
                    {showPass ? <BsEyeSlash /> : <BsEye />}
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1 justify-start">
                <label htmlFor="password " className="text-sm text-gray-500 font-semibold">New Password</label>
                <div className="w-full flex items-center border rounded">
                  <input type={showPass ? 'text' : 'password'} onChange={handleOnChange} placeholder="Password" name="password" className="h-10 pl-2 w-full focus:outline-none focus:border border-gray-200" />
                  <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="h-10 w-10 bg-gray-200 flex justify-center items-center">
                    {showPass ? <BsEyeSlash /> : <BsEye />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Password