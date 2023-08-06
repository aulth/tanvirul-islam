import Footer from "@/components/Footer";
import Row from "@/components/Gallery/Row";
import Navbar from "@/components/Navbar";
const page = () => {
  const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  let images = [
    {
        src:"https://source.unsplash.com/random/?man",
        date:"27/07/2023",
        caption:"Professor Man",
    },
    {
        src:"https://source.unsplash.com/random/?student",
        date:"02/07/2022",
        caption:"Student studying",
    },
    {
        src:"https://source.unsplash.com/random/?girl",
        date:"20/05/2023",
        caption:"girl sitting in class",
    },
    {
        src:"https://source.unsplash.com/random/?women",
        date:"21/02/2023",
        caption:"women working",
    },
    {
        src:"https://source.unsplash.com/random/?collage",
        date:"01/07/2023",
        caption:"this is our college",
    },
    {
        src:"https://source.unsplash.com/random/?office",
        date:"27/06/2023",
        caption:"Office",
    },
    {
        src:"https://source.unsplash.com/random/?ground",
        date:"12/07/2023",
        caption:"here we play matches",
    },
];

const groupPhotosByMonth = (photos) => {
  const photosByMonth = photos.reduce((acc, photo) => {
    const [day, month, year] = photo.date.split('/');

    // Create a key for the month and year combination
    const monthKey = `${year}-${month}`;

    if (!acc[monthKey]) {
      // Create an array for each month if it doesn't exist
      acc[monthKey] = {
        month: parseInt(month, 10), // Store the month as an integer
        year: parseInt(year, 10),   // Store the year as an integer
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

const {photosGroupedByMonth, allImages} = groupPhotosByMonth(images);
  return (
    <>
      <div className=" border-b border-gray-300">
        <Navbar />
      </div>
      <div className="w-screen bg-gradient-to-br from-[#FEFDFC] to-[#F8F7EE]">
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
          photosGroupedByMonth && photosGroupedByMonth.length>0 && photosGroupedByMonth.map((data, index)=>{
            return <Row key={index} time={`${month[data.month-1]} ${data.year}`} images={data.photos} allImages={allImages}/>
          })
        }
      </div>
      <Footer />
    </>
  )
}

export default page