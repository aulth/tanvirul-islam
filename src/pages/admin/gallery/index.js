import Navbar from "@/components/Navbar";
import Login from "@/components/admin/Login";
import Gallery from "@/components/admin/images/Gallery";
const Page = () => {
    return (
        <>
            <div className="border-b">
                <Navbar />
            </div>
            <Gallery Login={Login}/>
        </>
    )
}
export default Page;