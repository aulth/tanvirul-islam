import Navbar from "@/components/Navbar"
import Link from "next/link"

const index = () => {
    return (
        <>
            <div className="border-b">
                <Navbar />
            </div>
            <div className="container mx-auto p-4">
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
                </div>
            </div>
        </>
    )
}

export default index