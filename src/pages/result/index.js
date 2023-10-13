import Navbar from "@/components/Navbar"
import CheckResult from "@/components/result/CheckResult"

const index = () => {
  return (
    <>
    <div className="border-b">
        <Navbar/>
    </div>
    <div className="container mx-auto p-4">
        <div className="w-full border ">
            <div className="w-full h-32 bg-[#46a999] p-4 flex gap-1 flex-col justify-center items-center text-white">
                <span>بسم اللہ الرحمن الرحیم</span>
                <h2 className="text-center text-2xl font-bold">
                    Darul Uloom Ahle Sunnat Tanvirul Islam
                </h2>
            </div>
            <CheckResult/>
        </div>
    </div>
    </>
  )
}

export default index