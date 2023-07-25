import Image from 'next/image'
import React, {useState} from 'react'
import {BiMenu } from 'react-icons/bi'
import {IoCloseSharp} from 'react-icons/io5'
import {BiSolidUser} from 'react-icons/bi'
const Navbar = () => {
    const [openedMenu, setOpenedMenu] = useState(false);
    return (
        <>
            <div className="w-screen bg-transparent">
                <div className="container mx-auto flex justify-between items-center p-4 md:py-0">
                    <a href="#">
                        <Image src="/image/light-logo.png" width={240} height={100} alt="logo" />
                    </a>
                    <ul className={`flex ${openedMenu?'':'md:flex hidden'} z-10 transition duration-75 menu gap-2 flex-col items-center md:flex-row absolute left-0 top-[65.38px] md:static md:bg-transparent md:border-none border-b-2 border-black bg-gradient-to-br from-[#FEFDFC] to-[#F8F7EE] md:w-auto w-full md:p-0 p-4 pt-0`}>
                        <li className='md:w-auto w-full text-black font-semibold'>
                            <a href="#" className='w-full menu-link md:hover:bg-transparent hover:bg-[rgb(250,248,239)] md:p-0 p-2 pt-1 rounded inline-block duration-75 relative'>
                                <span className='inline-block md:pb-1'>Alumni</span>
                                <span className="line"></span>
                            </a>
                        </li>
                        <li className='md:w-auto w-full text-black font-semibold'>
                            <a href="#" className='w-full menu-link md:hover:bg-transparent hover:bg-[rgb(250,248,239)]  md:p-0 p-2 pt-1 rounded inline-block duration-75 relative'>
                                <span className='inline-block md:pb-1'>Gallery</span>
                                <span className="line"></span>
                            </a>
                        </li>
                        <li className='md:w-auto w-full text-black font-semibold'>
                            <a href="#" className='w-full menu-link md:hover:bg-transparent hover:bg-[rgb(250,248,239)]  md:p-0 p-2 pt-1 rounded inline-block duration-75 relative'>
                                <span className='inline-block md:pb-1'>Courses</span>
                                <span className="line"></span>
                            </a>
                        </li>
                        <li className='md:w-auto w-full text-black font-semibold md:font-bold bg-[#46a999] md:rounded-none rounded md:text-white  '>
                            <a href="#" className='w-full menu-link md:hover:bg-inherit   md:py-5 md:px-4 hover:bg-[#E6F2EF] text-white md:hover:text-white hover:text-black  md:p-0 p-2 pt-1 rounded inline-block duration-75 relative'>
                                <span className=' md:pb-1 inline-flex items-center gap-1 md:mt-0 mt-1'><BiSolidUser className='text-lg' />Register </span>
                                <span className="line"></span>
                            </a>
                        </li>
                    </ul>
                    <button onClick={()=>{setOpenedMenu(status=>!status)}} className='text-black font-semibold md:hidden block focus:shadow-sm p-1 rounded'>
                        {openedMenu?<IoCloseSharp className='text-2xl' />:<BiMenu className='text-2xl' />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar