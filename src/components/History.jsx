import Image from 'next/image'
import React from 'react'

const History = () => {
    return (
        <>
            <div className="container mx-auto p-12 grid grid-cols-1 border-b ">
                <div className="w-full grid gap-2 grid-cols-2 ">
                    <div className="flex items-end flex-col shrink-0 pr-8 border-r border-black pb-8">
                        <h2 className="font-bold">Founded</h2>
                        <p className="text-sm font-semibold text-right">On 1 Jan 1948 this institution was founded</p>
                    </div>
                    <div className="aspect-square w-12 rounded-full  shadow-md shrink-0 absolute left-1/2 -translate-x-[55%] overflow-hidden">
                        <Image src="https://source.unsplash.com/random/?foundation" layout='fill' objectFit='cover' className='rounded-full hover:scale-110 duration-75' alt='foundation' />
                    </div>
                    <div className="flex items-start shrink-0 pl-8 pb-8">
                        <h2 className="font-bold text-xl">1940</h2>
                    </div>
                </div>
                <div className="w-full grid gap-2 grid-cols-2 ">
                    <div className="flex items-end flex-col shrink-0 pr-8 border-r border-black pb-8">
                        <h2 className="font-bold text-xl">1990</h2>
                    </div>
                    <div className="aspect-square w-12 rounded-full  shadow-md shrink-0 absolute left-1/2 -translate-x-[55%] overflow-hidden">
                        <Image src="https://source.unsplash.com/random/?foundation" layout='fill' objectFit='cover' className='rounded-full hover:scale-110 duration-75 ' alt='foundation' />
                    </div>
                    <div className="flex items-start flex-col shrink-0 pl-8 pb-8">
                        <h2 className="font-bold">Founded</h2>
                        <p className="text-sm font-semibold text-left">On 1 Jan 1948 this institution was founded</p>
                    </div>
                </div>
                <div className="w-full grid gap-2 grid-cols-2 ">
                    <div className="flex items-end flex-col shrink-0 pr-8 border-r border-black pb-8">
                        <h2 className="font-bold">Founded</h2>
                        <p className="text-sm font-semibold text-right">On 1 Jan 1948 this institution was founded</p>
                    </div>
                    <div className="aspect-square w-12 rounded-full  shadow-md shrink-0 absolute left-1/2 -translate-x-[55%] overflow-hidden">
                        <Image src="https://source.unsplash.com/random/?foundation" layout='fill' objectFit='cover' className='rounded-full hover:scale-110 duration-75' alt='foundation' />
                    </div>
                    <div className="flex items-start shrink-0 pl-8 pb-8">
                        <h2 className="font-bold text-xl">1940</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History