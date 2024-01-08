import Navbar from "@/components/Navbar";
import NoticeBoard from "@/components/admin/notices/NoticeBoard";
import Release from "@/components/admin/notices/Release/Release";


const page = () => {
    return (
        <>
            <div className="border-b">
                <Navbar />
            </div>
            <div className="container grid grid-cols-1 gap-2 md:grid-cols-2 mx-auto p-4">
                <div>
                   <Release/>
                </div>
                <div>
                    <NoticeBoard/>
                </div>
            </div>
        </>
    )
}
export default page;