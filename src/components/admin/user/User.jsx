import React, { useState, useEffect } from 'react'

const User = () => {
    const [data, setData] = useState("");
    const fetchUser = async () => {
        const res = await fetch("/api/admin/user/getall", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        const json = await res.json();
        console.log(json.users)
        if (json.success) {
            setData(json.users);
        } else {
            setData("");
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <>
            <div className="w-full overflow-x-auto">
                <table className="w-full border mt-4">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 font-semibold text-left">Name</th>
                            <th className="p-2 font-semibold text-left">Email</th>
                            <th className="p-2 font-semibold text-left">Password</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {data && data.map((data, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2 border-r">{data.name}</td>
                                <td className="p-2 border-r">{data.email}</td>
                                <td className="p-2">{data.password}</td>
                            </tr>
                        ))}
                        {
                            !data &&
                            <Skelton/>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User

function Skelton() {
    return (
        <>
            <tr className="border-b animate-pulse duration-100">
                <td className="p-2 border-r bg-gray-50">&nbsp;</td>
                <td className="p-2 border-r bg-gray-50">&nbsp;</td>
                <td className="p-2 bg-gray-50">&nbsp;</td>
            </tr>
            <tr className="border-b animate-pulse duration-100">
                <td className="p-2 border-r bg-gray-50">&nbsp;</td>
                <td className="p-2 border-r bg-gray-50">&nbsp;</td>
                <td className="p-2 bg-gray-50">&nbsp;</td>
            </tr>
            <tr className="border-b animate-pulse duration-100">
                <td className="p-2 border-r bg-gray-50">&nbsp;</td>
                <td className="p-2 border-r bg-gray-50">&nbsp;</td>
                <td className="p-2 bg-gray-50">&nbsp;</td>
            </tr>
        </>
    )
}