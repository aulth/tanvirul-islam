import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="items-center pb-4  border-t ">
            <div className="container mx-auto p-8 pb-1">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                    <div className="md:col-span-3">
                        <Image src="/image/light-logo.png" width={240} height={100} alt="logo" />
                        <p className="text-sm font-semibold text-gray-500 mt-2 md:w-3/4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae, quaerat, maxime quia perspiciatis aspernatur facilis fuga ullam repellat pariatur consequatur.
                        </p>
                        <ul className="flex items-center gap-2 mt-4">
                            <li className="shrink-0 rounded-full bg-blue-100 p-2 aspect-square flex justify-center items-center">
                                <a href="#">
                                    <Image src="/image/icon/facebook.png" alt='facebook' className='hover:scale-125 duration-75' width={20} height={20} />
                                </a>
                            </li>
                            <li className="shrink-0 rounded-full bg-red-100 p-2 aspect-square flex justify-center items-center">
                                <a href="#">
                                    <Image src="/image/icon/youtube.png" alt='youtube' className='hover:scale-125 duration-75' width={20} height={20} />
                                </a>
                            </li>
                            <li className="shrink-0 rounded-full bg-green-100 p-2 aspect-square flex justify-center items-center">
                                <a href="#">
                                    <Image src="/image/icon/whatsappp.png" alt='whatsapp' className='hover:scale-125 duration-75' width={20} height={20} />
                                </a>
                            </li>
                            <li className="shrink-0 rounded-full bg-purple-100  p-2 aspect-square flex justify-center items-center">
                                <a href="#">
                                    <Image src="/image/icon/instagram.png" alt='instagram' className='hover:scale-125 duration-75' width={20} height={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='md:mt-0 mt-4'>
                        <h3 className="font-bold">Links</h3>
                        <ul className="list-inside text-sm mt-2 font-semibold text-gray-500 flex flex-col gap-2">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">Alumni</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Community</h3>
                        <ul className="list-inside text-sm mt-2 font-semibold text-gray-500 flex flex-col gap-2">
                            <li><Link href="/">Register</Link></li>
                            <li><Link href="/">Login</Link></li>
                            <li><Link href="/">Alumni</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Resources</h3>
                        <ul className="list-inside text-sm mt-2 font-semibold text-gray-500 flex flex-col gap-2">
                            <li><Link href="/">Gallery</Link></li>
                            <li><Link href="/">Notice</Link></li>
                            <li><Link href="/">Books</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='mt-4' />
            <h4 className="font-semibold text-gray-600 text-sm mt-4 md:text-right text-center md:mr-2">Copyright 2023 | All Rights Reserved</h4>
        </footer>
    )
}

export default Footer