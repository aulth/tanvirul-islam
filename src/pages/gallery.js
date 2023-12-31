import Footer from "@/components/Footer";
import Row from "@/components/Gallery/Row";
import Navbar from "@/components/Navbar";
import users from "@/data/users";
const page = ({gallery}) => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const groupPhotosByMonth = (photos) => {
    const photosByMonth = photos.reduce((acc, photo) => {
      const date = new Date(photo.createdAt);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
  
      // Create a key for the month and year combination
      const monthKey = `${year}-${month}`;
  
      if (!acc[monthKey]) {
        // Create an array for each month if it doesn't exist
        acc[monthKey] = {
          month: month + 1, // Month is zero-based, so add 1 to get the correct month
          year,
          photos: [],
        };
      }
  
      // Add the photo to the corresponding month array
      acc[monthKey].photos.push(photo);
  
      return acc;
    }, {});
  
    // Convert the object to an array of objects and sort by year and month in descending order
    const photosGroupedByMonth = Object.values(photosByMonth).sort((a, b) => {
      // Sort by year first in descending order
      if (a.year !== b.year) {
        return b.year - a.year;
      }
  
      // If the years are the same, sort by month in descending order
      return b.month - a.month;
    });
  
    const allImages = photosGroupedByMonth.reduce((images, group) => {
      return images.concat(group.photos);
    }, []);
    
    return { photosGroupedByMonth, allImages };
  };
  

  const { photosGroupedByMonth, allImages } = groupPhotosByMonth(gallery);
  return (
    <>
      <div className=" border-b border-gray-300">
        <Navbar />
      </div>
      <div className="w-screen bg-green-100">
        <div className="container mx-auto p-8">
          <h2 className="text-center text-2xl md:text-4xl font-bold ">
            Gallery
          </h2>
          <p className="text-sm text-gray-500 text-center md:w-1/2 w-full mx-auto mt-2">
            Explore our college community&apos;s vibrant life, events, and cherished memories through a captivating gallery showcasing the essence of campus life.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-5 pt-4 grid grid-cols-1 gap-2">
        {
          photosGroupedByMonth && photosGroupedByMonth.length > 0 && photosGroupedByMonth.map((data, index) => {
            return <Row key={index} time={`${month[data.month - 1]} ${data.year}`} images={data.photos} allImages={allImages} />
          })
        }
      </div>
      <Footer />
    </>
  )
}

export default page

export async function getServerSideProps() {
  const res = await fetch("https://duati.vercel.app/api/admin/gallery/getall",{
    method:"POST",
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify({adminPin:process.env.NEXT_PUBLIC_ADMIN_PIN})
  })
  const json = await res.json()
  return { props: { gallery:json.gallery } }
}