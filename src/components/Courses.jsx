import React from 'react'
import { BiBook } from 'react-icons/bi'
import { BsBookHalf } from 'react-icons/bs'
import Image from 'next/image'
const Courses = () => {
    return (
        <>

            <div className="container mx-auto p-8 scroll-smooth" id='courses'>
                <h2 className="text-left text-2xl font-bold flex gap-2  items-center"><BsBookHalf className='mt-1' /> Explore Courses</h2>
                <p className="text-sm text-left font-semibold text-gray-500 mt-1">
                    Discover our wide selection of courses. Explore various subjects, learn from great scholars, and find opportunities for your future.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="border rounded-lg grid grid-cols-4 gap-2 bg-white p-2 transform hover:scale-105 hover:shadow transition-transform">
                        <div className='bg-green-50 flex justify-center items-center rounded-lg'>
                            <Image src="/image/icon/molvi.png" alt="molvi" width={40} height={40} />
                        </div>
                        <div className="col-span-3 p-2">
                            <h2 className="font-bold">Fazeelat (Molvi)</h2>
                            <span className="font-semibold text-sm text-gray-500">120+ students enrolled</span>
                        </div>
                    </div>

                    <div className="border rounded-lg grid grid-cols-4 gap-2 bg-white p-2 transform hover:scale-105 hover:shadow transition-transform">
                        <div className='bg-blue-50 flex justify-center items-center rounded-lg'>
                            <Image src="/image/icon/quran.png" alt="Quran" width={40} height={40} />
                        </div>
                        <div className="col-span-3 p-2">
                            <h2 className="font-bold">Hifz (Memorisation of Quran)</h2>
                            <span className="font-semibold text-sm text-gray-500">100+ students enrolled</span>
                        </div>
                    </div>
                    <div className="border rounded-lg grid grid-cols-4 gap-2 bg-white p-2 transform hover:scale-105 hover:shadow transition-transform">
                        <div className='bg-yellow-50 flex justify-center items-center rounded-lg'>
                            <Image src="/image/icon/nursery.png" alt="nursery" width={40} height={40} />
                        </div>
                        <div className="col-span-3 p-2">
                            <h2 className="font-bold">Nursery (Class 1 to 8)</h2>
                            <span className="font-semibold text-sm text-gray-500">100+ students enrolled</span>
                        </div>
                    </div>
                    <div className="border rounded-lg grid grid-cols-4 gap-2 bg-white p-2 transform hover:scale-105 hover:shadow transition-transform">
                        <div className='bg-violet-50 flex justify-center items-center rounded-lg'>
                            <Image src="/image/icon/recitation.png" alt="qirat" width={40} height={40} />
                        </div>
                        <div className="col-span-3 p-2">
                            <h2 className="font-bold">Qirat (Recitation of Quran)</h2>
                            <span className="font-semibold text-sm text-gray-500">100+ students enrolled</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses