import Footer from "@/components/Footer";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { MdCancel, MdCheck, MdEdit, MdFacebook, MdWhatsapp } from "react-icons/md";
import Sidebar from "./Sidebar";
import { ContextData } from "@/context/context";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { useRouter } from "next/router";
import users from "@/data/users";
const Profile = () => {
  const { toggleProfileMenu, login } = useContext(ContextData);
  const [data, setData] = useState();
  const [dataCopy, setDataCopy] = useState(data);
  const [changeDetected, setChangeDetected] = useState(false);
  const router = useRouter();
  const handleOnChange = (e) => {
    if (!changeDetected) {
      setDataCopy(data);
    }
    setChangeDetected(true);
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleOnCancel = (e) => {
    e.preventDefault();
    setData(dataCopy);
    setChangeDetected(false)
  }
  useEffect(() => {
    if (!login) {
      router.push('/auth/login');
    } else {
      if (typeof window != undefined) {
        const id = localStorage.getItem('duati-id');
        const foundUser = users.find((user) => user.id === id);
        if (foundUser) {
          console.log(foundUser)
          setData(foundUser);
        }
      }
    }
  }, [login])

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between ">
          <h2 className="font-bold text-xl">Profile</h2>
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
            {
              data &&
              <>
                <div className="w-full flex items-center px-4 mt-4">
                  <div className="flex md:justify-betwen md:flex-row flex-col justify-center w-full gap-3 items-center">
                    <div className="relative rounded-full">
                      <Image src={data.avatar} alt="profile_picture" width={0} height={0} className="w-24 aspect-square border-2 border-white rounded-full object-cover" />
                      <button className="p-1 aspect-square bg-white rounded-full text-sm shadow-md border backdrop-blur-md absolute bottom-1 right-1"><MdEdit /> </button>
                    </div>
                    <div className="w-full flex md:gap-0 gap-4 md:flex-row flex-col justify-center items-center  md:justify-between">
                      <div>
                        <h2 className="font-bold md:text-left text-center">{data.name}</h2>
                        <h3 className="text-sm text-gray-500 md:text-left text-center">@{data.username}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full items-center grid grid-cols-5 p-4 text-sm mt-4">
                  <div className="col-span-2 font-semibold text-gray-500">Username</div>
                  <div className="col-span-3">
                    <div className="flex items-center border p-1 rounded">
                      <span className="border-r pr-1">duati.com/</span>
                      <input type="text" value={data.username} onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z0-9-_\.]/g, ""); }} onChange={handleOnChange} name="username" className="border-none focus:outline-none pl-1 w-full" />
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="w-full items-start grid grid-cols-5 p-4 text-sm">
                  <div className="col-span-2 font-semibold text-gray-500">Name</div>
                  <div className="col-span-3">
                    <div className="flex items-center border p-1 rounded">
                      <input type="text" value={data.name} onChange={handleOnChange} name="name" className="border-none focus:outline-none pl-1 w-full" />
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="w-full items-start grid grid-cols-5 p-4 text-sm">
                  <div className="col-span-2 font-semibold text-gray-500">Bio</div>
                  <div className="col-span-3">
                    <div className="flex items-center border p-1 rounded">
                      <textarea name="bio" id="bio" value={data.bio} onChange={handleOnChange} className="border-none focus:outline-none pl-1 w-full" cols="30" rows="4"></textarea>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
                  <div className="col-span-2 font-semibold text-gray-500">Job Title</div>
                  <div className="col-span-3">
                    <div className="flex items-center border p-1 rounded">
                      <input type="text" value={data.title} onChange={handleOnChange} name="title" className="border-none focus:outline-none pl-1 w-full" />
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
                  <div className="col-span-2 font-semibold text-gray-500">Course</div>
                  <div className="col-span-3">
                    <div className="flex items-center border p-1 rounded">
                      <input type="text" value={data.course} onChange={handleOnChange} name="course" className="border-none focus:outline-none pl-1 w-full" />
                    </div>
                  </div>
                </div>
                <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
                  <div className="col-span-2 font-semibold text-gray-500">Duration</div>
                  <div className="col-span-3">
                    <div className="flex items-center justify-start">
                      <select name="start" id="start" onChange={handleOnChange} value={data.start} className="p-1 border focus:outline-none rounded">
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                      <span className="mx-2">to</span>
                      <select name="end" id="end" value={data.to} onChange={handleOnChange} className="p-1 border focus:outline-none rounded">
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="w-full items-start grid grid-cols-5 p-4 text-sm">
                  <div className="col-span-2 font-semibold text-gray-500">Links</div>
                  <div className="col-span-3 space-y-4">
                    <div className="">
                      <div className="flex items-center border p-1 rounded">
                        <span className="border-r pr-1"><MdFacebook /></span>
                        <input type="text" value={data.facebook} onChange={handleOnChange} className="border-none focus:outline-none pl-1 w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center border p-1 rounded">
                        <span className="border-r pr-1"><AiOutlineTwitter /> </span>
                        <input type="text" value={data.twitter} onChange={handleOnChange} className="border-none focus:outline-none pl-1 w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center border p-1 rounded">
                        <span className="border-r pr-1"><MdWhatsapp /> </span>
                        <input type="text" value={data.whatsapp} onChange={handleOnChange} className="border-none focus:outline-none pl-1 w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center border p-1 rounded">
                        <span className="border-r pr-1"><BsInstagram /> </span>
                        <input type="text" value={data.instagram} onChange={handleOnChange} className="border-none focus:outline-none pl-1 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
            {
              !data &&
              <LoadingSelton />
            }
          </div>
        </div>
      </div>
    </>
  )
}


const LoadingSelton = () => {
  return (
    <>
      <div className="w-full flex items-center px-4 mt-4">
        <div className="flex md:justify-betwen md:flex-row flex-col justify-center w-full gap-3 items-center z-10">
          <div className="relative rounded-full">
            <div className="w-24 aspect-square border-2 bg-gray-100 animate-pulse rounded-full object-cover" />
            <button className="p-1 aspect-square bg-gray-100 animate-pulse rounded-full text-sm shadow-md border backdrop-blur-md absolute bottom-1 right-1 w-6"> </button>
          </div>
          <div className="w-full flex md:gap-0 gap-4 md:flex-row flex-col justify-center items-center  md:justify-between">
            <div className="space-y-2">
              <h2 className="font-bold md:text-left text-center bg-gray-100 animate-pulse w-36 h-4"></h2>
              <h3 className="text-sm md:text-left text-center bg-gray-100 animate-pulse w-40 h-4"></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full items-center grid grid-cols-5 p-4 text-sm mt-4">
        <div className="col-span-2 font-semibold text-gray-500">Username</div>
        <div className="col-span-3">
          <div className="flex items-center border p-1 rounded">
            <span className="border-r pr-1">duati.com/</span>
            <div className="border-none focus:outline-none pl-1 w-full bg-gray-100 animate-pulse h-4 ml-1" />
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="w-full items-start grid grid-cols-5 p-4 text-sm">
        <div className="col-span-2 font-semibold text-gray-500">Name</div>
        <div className="col-span-3">
          <div className="bg-gray-100 animate-pulse w-full h-4 rounded">
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="w-full items-start grid grid-cols-5 p-4 text-sm">
        <div className="col-span-2 font-semibold text-gray-500">Bio</div>
        <div className="col-span-3">
          <div className="bg-gray-100 animate-pulse w-full h-4 rounded">
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="w-full items-start grid grid-cols-5 p-4 text-sm">
        <div className="col-span-2 font-semibold text-gray-500">Title</div>
        <div className="col-span-3">
          <div className="bg-gray-100 animate-pulse w-full h-4 rounded">
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="w-full items-start grid grid-cols-5 p-4 text-sm">
        <div className="col-span-2 font-semibold text-gray-500">Course</div>
        <div className="col-span-3">
          <div className="bg-gray-100 animate-pulse w-full h-4 rounded">
          </div>
        </div>
      </div>
      <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
        <div className="col-span-2 font-semibold text-gray-500">Duration</div>
        <div className="col-span-3">
          <div className="flex items-center justify-start">
            <div className="w-20 h-4 bg-gray-100 animate-pulse"></div>
            <span className="mx-2">to</span>
            <div className="w-20 h-4 bg-gray-100 animate-pulse"></div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="w-full items-start grid grid-cols-5 p-4 text-sm">
        <div className="col-span-2 font-semibold text-gray-500">Links</div>
        <div className="col-span-3 space-y-4">
          <div className="">
            <div className="flex items-center border p-1 rounded">
              <span className="border-r pr-1"><MdFacebook /></span>
              <div className=" bg-gray-100 animate-pulse h-4 ml-1 w-full" />
            </div>
          </div>
          <div>
            <div className="flex items-center border p-1 rounded">
              <span className="border-r pr-1"><AiOutlineTwitter /> </span>
              <div className=" bg-gray-100 animate-pulse h-4 ml-1 w-full" />
            </div>
          </div>
          <div>
            <div className="flex items-center border p-1 rounded">
              <span className="border-r pr-1"><MdWhatsapp /> </span>
              <div className=" bg-gray-100 animate-pulse h-4 ml-1 w-full" />
            </div>
          </div>
          <div>
            <div className="flex items-center border p-1 rounded">
              <span className="border-r pr-1"><BsInstagram /> </span>
              <div className=" bg-gray-100 animate-pulse h-4 ml-1 w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Profile