import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Password from "@/components/user/Password"
const page = () => {
    return (
        <>
            <div className=" border-b border-gray-300">
                <Navbar />
            </div>
            <Password/>
            <Footer />
        </>
    )
}
export default page;