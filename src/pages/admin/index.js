import Navbar from "@/components/Navbar"
import Dashboard from "@/components/admin/Dashboard"
import Link from "next/link"

const index = () => {
    return (
        <>
            <div className="border-b">
                <Navbar />
            </div>
            <Dashboard/>
        </>
    )
}

export default index