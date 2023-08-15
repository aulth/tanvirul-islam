import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ForgotPassword from "@/components/Auth/ForgotPassword";
const page = () => {
  return (
    <>
      <div className=" border-b border-gray-300">
        <Navbar />
      </div>
      <ForgotPassword/>
      <Footer />
    </>
  )
}

export default page