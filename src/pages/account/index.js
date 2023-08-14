import Profile from "@/components/user/Profile"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
const page = () => {
    return (
        <>
            <div className=" border-b border-gray-300">
                <Navbar />
            </div>
            <Profile />
            <Footer />
        </>
    )
}
export default page;