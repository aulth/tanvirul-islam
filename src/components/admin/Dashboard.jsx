import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Login from './Login';
const Dashboard = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const verifyToken = async () => {
        try {
            const res = await fetch("/api/admin/auth/verify", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({'authtoken':sessionStorage.getItem('admintoken')})
            })
            const json = await res.json()
            if (json.success) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
                if (typeof window != undefined) sessionStorage.clear();
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (typeof window != undefined) {
            if (sessionStorage.getItem('admintoken')) {
                verifyToken();
            }
        }
    }, [])

    return (
        <>
            <div className="container mx-auto p-4">
                {
                    loggedIn ?
                        <div className="border">
                            <div className="w-full py-8 px-4 flex flex-col mb-1 justify-center items-center bg-[#46a999] text-white">
                                <span>بسم اللہ الرحمن الرحیم</span>
                                <h2 className="text-2xl text-center font-bold">Darul Uloom Ahle Sunnat Tanvirul Islam</h2>
                                <span className="font-semibold">Admin</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-4">
                                    <ul className="list-inside list-disc">
                                        <li className="text-blue-500"><Link href="/admin/gallery">Upload Photo</Link></li>
                                        <li className="text-blue-500"><Link href="/admin/notice">Upload Notice/Release</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> :
                        <Login />
                }
            </div>
        </>
    )
}

export default Dashboard