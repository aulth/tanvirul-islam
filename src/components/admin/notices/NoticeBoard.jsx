import React from 'react'
import { BiPen, BiSave } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'

const NoticeBoard = () => {
    return (
        <>
            <div className="w-full px-4">
                <h3 className="text-2xl font-bold flex gap-2 justify-end  items-center mb-2">Notice <BsPencil className='mt-1 text-lg shrink-0' /></h3>
                <textarea name="notice" className='w-full h-64 text-right rounded p-1 border focus:outline-none focus:border-blue-500'></textarea>
                <div className="flex justify-end">
                <button className="px-4  py-2 flex items-center gap-1 bg-green-500 text-white">
                    <BiSave className='shrink-0' />Save
                </button>
                </div>
            </div>
        </>
    )
}

export default NoticeBoard