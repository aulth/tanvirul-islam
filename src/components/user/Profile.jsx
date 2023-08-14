import Footer from "@/components/Footer";
import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { MdCancel, MdCheck, MdEdit} from "react-icons/md";
import Sidebar from "./Sidebar";
import { ContextData } from "@/context/context";
const Profile = () => {
  const {toggleProfileMenu} = useContext(ContextData);
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between ">
          <h2 className="font-bold text-xl">Profile</h2>
          <button className="p-2 border rounded-sm md:hidden" onClick={toggleProfileMenu}><BiMenu /></button>
        </div>
        <hr className="mt-2" />
        <div className="w-full grid gap-2 grid-cols-6 mt-4">
          <Sidebar/>
          <div className="md:col-span-5 col-span-6">
            <div className="flex justify-end gap-4">
              <button className="font-semibold text-sm border rounded-full aspect-square shrink-0 p-1 "><MdCancel /> </button>
              <button className="font-semibold text-sm border rounded-full aspect-square shrink-0 p-1 bg-[#46a999] text-white"><MdCheck /> </button>
            </div>
            <div className="w-full flex items-center px-4 mt-4">
              <div className="flex md:justify-betwen md:flex-row flex-col justify-center w-full gap-3 items-center z-10">
                <div className="relative rounded-full">
                  <Image src="https://source.unsplash.com/random/?boss" alt="profile_picture" width={0} height={0} className="w-24 aspect-square border-2 border-white rounded-full object-cover" />
                  <button className="p-1 aspect-square bg-white rounded-full text-sm shadow-md border backdrop-blur-md absolute bottom-1 right-1"><MdEdit /> </button>
                </div>
                <div className="w-full flex md:gap-0 gap-4 md:flex-row flex-col justify-center items-center  md:justify-between">
                  <div>
                    <h2 className="font-bold md:text-left text-center">Mohd Usman</h2>
                    <h3 className="text-sm text-gray-500 md:text-left text-center">@mohd.usman_7d3</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full items-center grid grid-cols-5 p-4 text-sm mt-4">
              <div className="col-span-2 font-semibold text-gray-500">Username</div>
              <div className="col-span-3">
                <div className="flex items-center border p-1 rounded">
                  <span className="border-r pr-1">duati.com/</span>
                  <input type="text" className="border-none focus:outline-none pl-1 w-full" />
                </div>
              </div>
            </div>
            <hr className="my-2" />
            <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
              <div className="col-span-2 font-semibold text-gray-500">Website</div>
              <div className="col-span-3">
                <div className="flex items-center border p-1 rounded">
                  <span className="border-r pr-1">https://</span>
                  <input type="text" className="border-none focus:outline-none pl-1 w-full" />
                </div>
              </div>
            </div>
            <hr className="my-2" />
            <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
              <div className="col-span-2 font-semibold text-gray-500">Job Title</div>
              <div className="col-span-3">
                <div className="flex items-center border p-1 rounded">
                  <input type="text" className="border-none focus:outline-none pl-1 w-full" />
                </div>
              </div>
            </div>
            <hr className="my-2" />
            <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
              <div className="col-span-2 font-semibold text-gray-500">Course</div>
              <div className="col-span-3">
                <div className="flex items-center border p-1 rounded">
                  <input type="text" className="border-none focus:outline-none pl-1 w-full" />
                </div>
              </div>
            </div>
            <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
              <div className="col-span-2 font-semibold text-gray-500">Duration</div>
              <div className="col-span-3">
                <div className="flex items-center justify-start">
                  <select name="start" id="start" className="p-1 border focus:outline-none rounded">
                    <option value="2020">2020</option>
                    <option value="2020">2021</option>
                    <option value="2020">2022</option>
                  </select>
                  <span className="mx-2">to</span>
                  <select name="end" id="end" className="p-1 border focus:outline-none rounded">
                    <option value="2020">2021</option>
                    <option value="2020">2022</option>
                    <option value="2020">2023</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile