import Footer from "@/components/Footer";
import React, {useEffect} from "react";
import Row from "@/components/Gallery/Row";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Script from "next/script";
import { BiCamera, BiCloset, BiMenu, BiSave } from "react-icons/bi";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import {AiOutlineCaretLeft} from 'react-icons/ai'
const Profile = () => {
    const toggleProfileMenu = () => {
        if (typeof window != undefined) {
          let elem = document.querySelector('.prof-menu');
          if (elem.classList.contains('-left-full')) {
            elem.classList.remove('-left-full');
            elem.classList.add('left-0');
          } else {
            elem.classList.add('-left-full');
            elem.classList.remove('left-0');
          }
        }
      }
      
      useEffect(() => {
        const profileMenu = document.querySelector('.prof-menu');
        let touchStartX = 0;
        let touchEndX = 0;
    
        const handleTouchStart = (event) => {
          touchStartX = event.touches[0].clientX;
        };
    
        const handleTouchMove = (event) => {
          touchEndX = event.touches[0].clientX;
        };
    
        const handleTouchEnd = () => {
          if (touchStartX > touchEndX && (touchStartX - touchEndX) > 50) {
            toggleProfileMenu(); // Call your function here when the sliding distance is significant
          }
        };
    
        profileMenu.addEventListener('touchstart', handleTouchStart);
        profileMenu.addEventListener('touchmove', handleTouchMove);
        profileMenu.addEventListener('touchend', handleTouchEnd);
    
        return () => {
          profileMenu.removeEventListener('touchstart', handleTouchStart);
          profileMenu.removeEventListener('touchmove', handleTouchMove);
          profileMenu.removeEventListener('touchend', handleTouchEnd);
        };
      }, []);
  return (
    <>
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between ">
        <h2 className="font-bold text-xl">Profile</h2>
        <button className="p-2 border rounded-sm md:hidden" onClick={toggleProfileMenu}><BiMenu /></button>
      </div>
      <hr className="mt-2" />
      <div className="w-full grid gap-2 grid-cols-6 mt-4">
        <div className="md:col-span-1 prof-menu fixed top-0 -left-full duration-75 ease-in md:bg-transparent bg-white rounded-tr md:border-none border-r z-20 w-3/4 h-screen md:p-0 p-4 md:block md:static ">
          <div className="md:hidden flex justify-between items-center mb-2">
            <Image src="https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png" width={25} height={25} className='md:w-[40px] aspect-square w-[36px] rounded-full object-cover' alt='avatar' />
            <button className="p-2 aspect-square" onClick={toggleProfileMenu}><MdOutlineCancel className="text-lg" onClick={toggleProfileMenu} /></button>
          </div>
          <button className="md:hidden h-10 bg-gray-100 rounded-l absolute top-1/2 -translate-y-1/2 right-0 flex items-center"> <AiOutlineCaretLeft className="-mr-0.5 text-gray-500"/> <span className="h-10  px-[1px] border-x border-gray-500 rounded-l-xl"></span></button>
          <ul className="w-full flex gap-2 flex-col items-start font-semibold text-sm">
            <button className="hover:bg-gray-100 rounded px-2 py-1 w-full text-left">My Details</button>
            <button className="hover:bg-gray-100 rounded px-2 py-1 w-full text-left">Profile</button>
            <button className="hover:bg-gray-100 rounded px-2 py-1 w-full text-left">Password</button>
          </ul>
        </div>
        <div className="md:col-span-5 col-span-6">
          <div className="w-full rounded-tl-[3rem] relative md:h-36 h-28 overflow-hidden">
            <Image src="https://source.unsplash.com/random/?sky" layout="fill" className="w-full object-cover" alt="cover photo" />
            <button className="absolute bottom-2 right-2 bg-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.8)] backdrop-blur-md p-1 rounded-sm"><BiCamera className="text-lg" /></button>
          </div>
          <div className="w-full flex items-center justify-between px-4 ">
            <div className="flex w-full gap-3 items-center -mt-6 z-10">
              <Image src="https://source.unsplash.com/random/?boss" alt="profile_picture" width={0} height={0} className="w-28 aspect-square border-2 border-white rounded-full object-cover" />
              <div className="mt-6 w-full flex justify-between">
                <div>
                  <h2 className="font-bold text-left">Mohd Usman</h2>
                  <h3 className="text-sm text-gray-500">@mohd.usman_7d3</h3>
                </div>
                <div className="md:block hidden">
                  <button className="font-semibold text-sm border rounded px-2 py-1">Cancel</button>
                  <button className="font-semibold text-sm border rounded px-2 py-1 bg-[#46a999] text-white ml-2">Save</button>
                </div>
                <div className="md:hidden -mr-4">
                  <button className="font-semibold text-sm  px-2 py-1"><MdCancel /></button>
                  <button className="font-semibold text-sm border rounded px-2 py-1 bg-[#46a999] text-white ml-2"><BiSave /> </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full items-center grid grid-cols-5 p-4 text-sm">
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