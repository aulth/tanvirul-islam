import Navbar from "@/components/Navbar";
import Gallery from "@/components/admin/images/Gallery";

const page = () => {
    return (
        <>
            <div className="border-b">
                <Navbar />
            </div>
            <Gallery />
        </>
    )
}
export default page;