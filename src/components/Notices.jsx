import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { MdAnnouncement, MdFiberNew, MdNewReleases, MdOutlineAnnouncement } from 'react-icons/md'
import { BsFeather } from "react-icons/bs";
const Notices = () => {
    const [notice, setNotice] = useState('');
    const [releases, setReleases] = useState([]);
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
    const fetchReleases = async () => {
        const res = await fetch("/api/admin/release/get", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        const json = await res.json()
        console.log(json)
        if (json.success) {
            setReleases(json.release)
        }
    }
    function parseISODate(inputDate) {
        const date = new Date(inputDate);
        return isNaN(date) ? "Invalid date format" : date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    }
    function isDateWithinThisDays(inputDate, days) {
        const date = new Date(inputDate);
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - date.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        return daysDifference <= days;
    }
    useEffect(() => {
        fetchNotice();
        fetchReleases();
    }, [])

    return (
        <>

            <div className="container mx-auto p-8 scroll-smooth border-b" id='notices'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <h2 className="text-left text-2xl font-bold flex gap-2  items-center"><MdNewReleases className='mt-1' />Releases</h2>
                        <ul className='list-inside p-4 py-2 bg-white border-l rounded-sm mt-4 text-sm'>
                            {
                                releases && releases.length > 0 &&
                                releases.map((data, index) => {
                                    return <li key={index} className='font-semibold inline-flex gap-1 items-start  text-gray-700'>{isDateWithinThisDays(data.createdAt, 15) && <Image src='/image/new.gif' width={25} height={25} className='mt-1.5' alt='new' />}<a href={data.document} target='_blank'> {data.title}</a></li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className="flex justify-end text-2xl font-bold items-center gap-2"><BsFeather className='text-xl' />Notice Board</h2>
                        <div className='p-4 font-[urdu] py-2 bg-white border-r rounded-sm mt-4 text-sm text-right'>
                            {notice && (
                                <>
                                    <div className='leading-7'
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