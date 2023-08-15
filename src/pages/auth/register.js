import Signup from "@/components/Auth/Signup";
import Footer from "@/components/Footer";
// import Navbar from "@/components/Gallery/Navbar";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <div className=" border-b border-gray-300">
        <Navbar />
      </div>
      <Signup />
      <Footer />
    </>
  )
}

export default page