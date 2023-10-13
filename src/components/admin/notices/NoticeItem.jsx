import React from 'react'
import { IoEyeOffSharp } from "react-icons/io5";
import { MdDelete  } from "react-icons/md";
const NoticeItem = () => {
  return (
    <>
    <div className="w-full p-2 border-b text-sm">
                    <h3 className="font-semibold">Notice regarding annual examination for molvi  annual examination</h3>
                    <div className="w-full flex gap-2 flex-wrap justify-start items-center mt-2">
                        <button className="px-2 py-1 rounded-sm bg-red-500 text-white flex gap-1 items-center"><MdDelete className="shrink-0 mt-0.5"/> Delete</button>
                        <button className="px-2 py-1 rounded-sm bg-yellow-500 text-white flex gap-1 items-center"><IoEyeOffSharp className="shrink-0 mt-0.5"/> Disable</button>
                    </div>
                </div>
    </>
  )
}

export default NoticeItem