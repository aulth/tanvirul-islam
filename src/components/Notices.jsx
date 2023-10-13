import React from 'react'
import { BiBook } from 'react-icons/bi'
import { BsBookHalf, BsSpeaker } from 'react-icons/bs'
import Image from 'next/image'
import { MdFiberNew, MdNewLabel, MdNewReleases, MdSpeakerNotes } from 'react-icons/md'
const Notices = () => {
    return (
        <>

            <div className="container mx-auto p-8 scroll-smooth border-b" id='notices'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <h2 className="text-left text-2xl font-bold flex gap-2  items-center"><MdNewReleases className='mt-1' />Releases</h2>
                        <ul className='list-inside p-4 py-2 bg-white border-l rounded-sm mt-4 text-sm'>
                            <li className='font-semibold inline-flex gap-1 items-start  text-gray-700'><MdFiberNew className='text-green-500 shrink-0 mt-1'/> Notice regarding annual examination for molvi  annual examination</li>
                            <li className='font-semibold inline-flex gap-1 items-start  text-gray-700'><MdFiberNew className='text-green-500 shrink-0 mt-1'/> Notice regarding annual examination for molvi  annual examination</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-right text-2xl font-bold flex gap-2 justify-end items-center">Notice Board</h2>
                        <div className='p-4 py-2 bg-white border-r rounded-sm mt-4 text-sm text-right'>
                            <p>
                                یہاں نئے اعلان پوسٹ کیے جائینگے۔
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notices