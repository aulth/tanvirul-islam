import React from 'react'

const Details = () => {
    return (
        <>
            <table className="w-full border mt-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 font-semibold text-left">Name</th>
                        <th className="p-2 font-semibold text-left">Email</th>
                        <th className="p-2 font-semibold text-left">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {subjects.map((subject, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2">{subject.name}</td>
                                <td className="p-2">{subject.marks}</td>
                                <td className="p-2">{subject.obtained}</td>
                            </tr>
                        ))} */}
                </tbody>
            </table>
        </>
    )
}

export default Details