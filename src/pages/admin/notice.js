import Navbar from "@/components/Navbar";
import NoticeBoard from "@/components/admin/notices/NoticeBoard";
import NoticeItem from "@/components/admin/notices/NoticeItem";
import NoticeUpload from "@/components/admin/notices/NoticeUpload";


const page = () => {
    return (
        <>
            <div className="border-b">
                <Navbar />
            </div>
            <div className="container grid grid-cols-1 gap-2 md:grid-cols-2 mx-auto p-4">
                <div>
                    <NoticeUpload />
                    <NoticeItem />
                    <NoticeItem />
                    <NoticeItem />
                    <NoticeItem />
                </div>
                <div>
                    <NoticeBoard/>
                </div>
            </div>
        </>
    )
}
export default page;