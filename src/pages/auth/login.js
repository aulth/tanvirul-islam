import Login from "@/components/Auth/Login";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <div className=" border-b border-gray-300">
        <Navbar />
      </div>
      <Login/>
      <Footer />
    </>
  )
}

export default page