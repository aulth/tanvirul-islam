import React, { useState, useEffect } from 'react'
import { BiMap } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import {FcDonate} from 'react-icons/fc'
const LandingPage = () => {
    const [images, setImages] = useState(['https://source.unsplash.com/random/?school', 'https://source.unsplash.com/random/?islamic', 'https://source.unsplash.com/random/?masjid', 'https://source.unsplash.com/random/?class', 'https://source.unsplash.com/random/?hostel'])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            let elem = document.querySelector('#section-1');
            let section2 = document.querySelector('#section-2');
            if (elem && section2) {
                section2.style.height = `${elem.offsetHeight}px`;
            }
        }
    }, []);

    return (
        <>
            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 border-b">
                <div className='p-8' id='section-1'>
                    <a href="https://goo.gl/maps/rMmqQVZB9vExp8rg8" target='_blank'>
                        <button className="px-2 py-1 bg-[#E6F2EF] flex gap-1 items-center text-sm font-semibold rounded"><BiMap className='text-[#3DB1A7]' />Amardobha, Post Bakhira, S.K.N.</button>
                    </a>
                    <h2 className="font-bold text-2xl md:text-4xl mt-6">A reliable Islamic Center to Follow the Qur&apos;an & Sunnah</h2>
                    <p className='mt-4 font-semibold text-gray-500 text-sm'>
                        Cultivate future scholars at our Islamic Academy. Nurturing young minds to become knowledgeable Aalims. Empower your child&apos;s journey today.
                    </p>
                    <div className="w-full flex items-center gap-2">
                    <Link href="/auth/register">
                        <button className="px-4 py-2 rounded mt-8 bg-[#FFC265] font-bold text-gray-700 text-sm">Get started</button>
                    </Link>
                    <Link href="/auth/register">
                        <button className="px-4 flex items-center gap-1 py-2 rounded mt-8 border border-[#FFC265] font-bold text-gray-700 text-sm">Donate <Image src="https://img.icons8.com/badges/48/donate.png" width={20} height={20} alt='donate'/></button>
                    </Link>
                    </div>
                    <div className="w-full flex justify-start gap-4 mt-6">
                        {
                            images.map((image, index) => {
                                return <button onClick={() => { setActiveIndex(index) }} key={index} className="rounded-full aspect-square w-16 shrink shadow-md border relative overflow-hidden">
                                    <Image src={images[index]} alt='masjid' layout='fill' objectFit='cover' className='rounded-full hover:scale-105 duration-75' />
                                </button>
                            })
                        }
                    </div>
                </div>
                <div id='section-2' className="p-8  h-full flex justify-center items-center  relative">
                    <Image src={images[activeIndex]} alt='carousel images' layout='fill' objectFit='cover' className='bg-blend-screen' />
                </div>
            </div>
        </>
    )
}

export default LandingPage