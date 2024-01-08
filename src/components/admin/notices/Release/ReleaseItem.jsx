import React from 'react'
import toast from 'react-hot-toast';
import { BsEye, BsEyeglasses } from 'react-icons/bs';
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const ReleaseItem = ({data, fetchReleases}) => {
  const deleteRelease = async () => {
    const res = await fetch("/api/admin/release/delete", {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({id:data._id, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
    })
    const json = await res.json()
    if (json.success) {
        toast.success(json.msg)
        fetchReleases();
    }else{
      toast.error(json.msg)
    }
}
const disableRelease = async () => {
    const res = await fetch("/api/admin/release/disable", {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({id:data._id, status:!data.disable, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
    })
    const json = await res.json()
    if (json.success) {
        toast.success(json.msg)
        fetchReleases();
    }else{
      toast.error(json.msg)
    }
}
  return (
    <>
      <div className="w-full p-2 border-b text-sm">
        <h3 className="font-semibold"><a href={data.document} target='_blank'>{data.title}</a></h3>
        <div className="w-full flex gap-2 flex-wrap justify-start items-center mt-2">
          <button className="px-2 py-1 rounded-sm bg-red-500 text-white flex gap-1 items-center" onClick={deleteRelease}><MdDelete className="shrink-0 mt-0.5" /> Delete</button>
          <button className={`px-2 py-1 rounded-sm ${data.disable?'bg-yellow-500':'bg-green-500'} text-white flex gap-1 items-center`} onClick={disableRelease}>{data.disable?<IoEyeOffSharp className="shrink-0 mt-0.5" />:<IoEye className="shrink-0 mt-0.5" />}{data.disable?'Disabled':'Enabled'}</button>
        </div>
      </div>
    </>
  )
}

export default ReleaseItem