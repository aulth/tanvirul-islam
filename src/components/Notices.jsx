import React, { useState, useEffect } from 'react'
import { MdFiberNew, MdNewReleases } from 'react-icons/md'
const Notices = () => {
    const [notice, setNotice] = useState('');
    const fetchNotice = async () => {
        const res = await fetch("/api/admin/notice/get", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        const json = await res.json()
        if (json.success) {
            setNotice(json.notice[0])
        }
    }
    function parseISODate(inputDate) {
        const date = new Date(inputDate);
        return isNaN(date) ? "Invalid date format" : date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    }
    useEffect(() => {
        fetchNotice();
    }, [])

    return (
        <>

            <div className="container mx-auto p-8 scroll-smooth border-b" id='notices'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <h2 className="text-left text-2xl font-bold flex gap-2  items-center"><MdNewReleases className='mt-1' />Releases</h2>
                        <ul className='list-inside p-4 py-2 bg-white border-l rounded-sm mt-4 text-sm'>
                            <li className='font-semibold inline-flex gap-1 items-start  text-gray-700'><MdFiberNew className='text-green-500 shrink-0 mt-1' /> Notice regarding annual examination for molvi  annual examination</li>
                            <li className='font-semibold inline-flex gap-1 items-start  text-gray-700'><MdFiberNew className='text-green-500 shrink-0 mt-1' /> Notice regarding annual examination for molvi  annual examination</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-right text-2xl font-bold flex gap-2 justify-end items-center">Notice Board</h2>
                        <div className='p-4 py-2 bg-white border-r rounded-sm mt-4 text-sm text-right'>
                            {notice && (
                                <>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: notice.description }}
                                    ></div>
                                    <p className='italic text-xs mt-2'>{parseISODate(notice.createdAt)}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notices