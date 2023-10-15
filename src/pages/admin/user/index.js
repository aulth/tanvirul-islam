import Navbar from "@/components/Navbar"
import User from "@/components/admin/user/User"
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
                        <span className="font-semibold">Admin / user</span>
                    </div>
                    <User/>
                </div>
            </div>
        </>
    )
}

export default index