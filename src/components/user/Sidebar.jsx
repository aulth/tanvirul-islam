import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCaretLeft } from 'react-icons/ai'
import { ContextData } from "@/context/context";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = () => {
  const {toggleProfileMenu, setLogin, setUserData} = useContext(ContextData);
  const router = useRouter();
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
      const handleLogout = ()=>{
        if(typeof window!=undefined){
          localStorage.removeItem('authtoken');
          setLogin(false);
          setUserData("");
        }
      }
  return (
   <>
   <div className="md:col-span-1 prof-menu fixed top-0 -left-full duration-75 ease-in md:bg-transparent bg-white rounded-tr md:border-none border-r z-20 w-3/4 h-screen md:p-0 p-4 md:block md:static ">
            <div className="md:hidden flex justify-between items-center mb-2">
              <Image src="https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png" width={25} height={25} className='md:w-[40px] aspect-square w-[36px] rounded-full object-cover' alt='avatar' />
              <button className="p-2 aspect-square" onClick={toggleProfileMenu}><MdOutlineCancel className="text-lg" onClick={()=>{toggleProfileMenu}} /></button>
            </div>
            <button className="md:hidden h-10 bg-gray-100 rounded-l absolute top-1/2 -translate-y-1/2 right-0 flex items-center"> <AiOutlineCaretLeft className="-mr-0.5 text-gray-500" /> <span className="h-10  px-[1px] border-x border-gray-500 rounded-l-xl"></span></button>
            <ul className="w-full flex gap-2 flex-col items-start font-semibold text-sm">
              <Link href="/account" className={`hover:bg-gray-100 ${router.pathname=="/account"?'bg-gray-100':''} rounded px-2 py-1 w-full text-left`}>Profile</Link>
              <Link href="/account/password" className={`hover:bg-gray-100 ${router.pathname.includes("password")?'bg-gray-100':''} rounded px-2 py-1 w-full text-left`}>Password</Link>
              {/* <Link href="/account/gallery"  className={`hover:bg-gray-100 ${router.pathname.includes("gallery")?'bg-gray-100':''} rounded px-2 py-1 w-full text-left`}>Gallery</Link> */}
              <button onClick={handleLogout}  className={`hover:bg-gray-100  rounded px-2 py-1 w-full text-left`}>Logout</button>
            </ul>
          </div>
   </>
  )
}

export default Sidebar