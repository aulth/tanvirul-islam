import AlumniCard from "@/components/Alumni/AlumniCard"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BiSearch } from "react-icons/bi"

const page = () => {
    const alumniData = [
        {
          name: "John Smith",
          batch: "2010-2012",
          profession: "Software Engineer",
          bio: "Passionate about coding and building innovative solutions for real-world problems.",
          facebook: "https://www.facebook.com/johnsmith",
          instagram: "https://www.instagram.com/johnsmith",
          whatsapp: "https://wa.me/1234567890",
          email: "john@example.com",
          verified: true
        },
        {
          name: "Emily Johnson",
          batch: "2015-2017",
          profession: "Graphic Designer",
          bio: "Loves creating visually appealing designs that leave a lasting impression.",
          facebook: "https://www.facebook.com/emilyjohnson",
          instagram: "https://www.instagram.com/emilyjohnson",
          whatsapp: "https://wa.me/1234567890",
          email: "emily@example.com",
          verified: false
        },
        {
          name: "Michael Lee",
          batch: "2008-2010",
          profession: "Business Analyst",
          bio: "Analytical thinker with a passion for identifying business insights.",
          facebook: "https://www.facebook.com/michaellee",
          instagram: "https://www.instagram.com/michaellee",
          whatsapp: "https://wa.me/1234567890",
          email: "michael@example.com",
          verified: true
        },
        {
          name: "Sophia Brown",
          batch: "2013-2015",
          profession: "Fashion Designer",
          bio: "Inspired by fashion trends and dedicated to creating unique and stylish designs.",
          facebook: "https://www.facebook.com/sophiabrown",
          instagram: "https://www.instagram.com/sophiabrown",
          whatsapp: "https://wa.me/1234567890",
          email: "sophia@example.com",
          verified: true
        },
        {
          name: "William Johnson",
          batch: "2016-2018",
          profession: "Mechanical Engineer",
          bio: "Enjoys designing and developing mechanical systems that improve efficiency.",
          facebook: "https://www.facebook.com/williamjohnson",
          instagram: "https://www.instagram.com/williamjohnson",
          whatsapp: "https://wa.me/1234567890",
          email: "william@example.com",
          verified: false
        },
        {
          name: "Ava Garcia",
          batch: "2011-2013",
          profession: "Teacher",
          bio: "Dedicated to shaping young minds and fostering a love for learning.",
          facebook: "https://www.facebook.com/avagarcia",
          instagram: "https://www.instagram.com/avagarcia",
          whatsapp: "https://wa.me/1234567890",
          email: "ava@example.com",
          verified: true
        },
        {
          name: "Noah Davis",
          batch: "2017-2019",
          profession: "Biomedical Researcher",
          bio: "Driven by a passion for advancing medical knowledge and improving healthcare.",
          facebook: "https://www.facebook.com/noahdavis",
          instagram: "https://www.instagram.com/noahdavis",
          whatsapp: "https://wa.me/1234567890",
          email: "noah@example.com",
          verified: false
        },
        {
          name: "Isabella Lopez",
          batch: "2014-2016",
          profession: "Journalist",
          bio: "Enthusiastic storyteller with a keen interest in reporting global events.",
          facebook: "https://www.facebook.com/isabellalopez",
          instagram: "https://www.instagram.com/isabellalopez",
          whatsapp: "https://wa.me/1234567890",
          email: "isabella@example.com",
          verified: true
        },
        {
          name: "James Wilson",
          batch: "2009-2011",
          profession: "Architect",
          bio: "Passionate about creating innovative and sustainable architectural designs.",
          facebook: "https://www.facebook.com/jameswilson",
          instagram: "https://www.instagram.com/jameswilson",
          whatsapp: "https://wa.me/1234567890",
          email: "james@example.com",
          verified: true
        },
        {
          name: "Emma Davis",
          batch: "2012-2014",
          profession: "Accountant",
          bio: "Detail-oriented and dedicated to maintaining accurate financial records.",
          facebook: "https://www.facebook.com/emmadavis",
          instagram: "https://www.instagram.com/emmadavis",
          whatsapp: "https://wa.me/1234567890",
          email: "emma@example.com",
          verified: false
        },
      ];
    return (
        <>
            <div className=" border-b border-gray-300">
                <Navbar />
            </div>
            <div className="w-screen bg-green-100">
                <div className="container mx-auto p-8">
                    <h2 className="text-center text-2xl md:text-4xl font-bold ">
                        Welcome to our Alumni Page!
                    </h2>
                    <p className="text-sm text-gray-500 text-center md:w-1/2 w-full mx-auto mt-2">
                        Stay connected with your alma mater and join our vibrant alumni community. Reconnect with old friends, celebrate your achievements, and find new opportunities for growth and networking.
                    </p>
                    <div className="w-full flex items-center md:w-3/4 mx-auto mt-6">
                        <input type="search" spellCheck={false} className="w-full bg-white p-2 h-10 focus:outline-none focus:border-l focus:border-y focus:border-[#46a999] border border-transparent" placeholder="Who are you looking for.." />
                        <button className="p-3 h-10 bg-[#46a999] text-white font-semibold text-sm flex items-center gap-1 "> <BiSearch /> Search</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-5 grid gap-4 md:gap-4 grid-cols-1 md:grid-cols-4 ">
                {
                    alumniData && alumniData.length>0 && alumniData.map((data, index)=>{
                        return <AlumniCard key={index} data={data} />
                    })
                }
            </div>
            <Footer/>
        </>
    )
}

export default page