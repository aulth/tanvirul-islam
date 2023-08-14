import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Gallery from "@/components/user/Gallery"
const page = () => {
    return (
        <>
            <div className=" border-b border-gray-300">
                <Navbar />
            </div>
            <Gallery/>
            <Footer />
        </>
    )
}
export default page;