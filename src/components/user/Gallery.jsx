import Footer from "@/components/Footer";
import React, { useEffect, useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdUpload } from "react-icons/md";
import Sidebar from "./Sidebar";
import { ContextData } from "@/context/context";
import Row from "../Gallery/Row";
import { useRouter } from "next/router";
import users from "@/data/users";
const Gallery = () => {
  const { toggleProfileMenu, login } = useContext(ContextData);
  const [allPhoto, setAllPhoto] = useState();
  const [groupedByMonth, setGroupedByMonth] = useState();
  const router = useRouter();
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
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
  useEffect(() => {
    if (!login) {
      router.push('/auth/login');
    } else {
      if (typeof window != undefined) {
        const id = localStorage.getItem('duati-id');
        const foundUser = users.find((user) => user.id === id);
        if (foundUser) {
          console.log(foundUser)
          const { photosGroupedByMonth, allImages } = groupPhotosByMonth(foundUser.images);
          setGroupedByMonth(photosGroupedByMonth);
          setAllPhoto(allImages);
        }
      }
    }
  }, [])
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between ">
          <h2 className="font-bold text-xl">Gallery</h2>
          <button className="p-2 border rounded-sm md:hidden" onClick={toggleProfileMenu}><BiMenu /></button>
        </div>
        <hr className="mt-2" />
        <div className="w-full grid gap-2 grid-cols-6 mt-4">
          <Sidebar />
          <div className="md:col-span-5 col-span-6">
            <div className="flex justify-end gap-4">
              <button className="font-semibold text-sm border rounded-full aspect-square shrink-0 p-1 bg-[#46a999] text-white"><MdUpload /> </button>
            </div>
            {
              groupedByMonth && groupedByMonth.length > 0 && groupedByMonth.map((data, index) => {
                return <Row key={index} time={`${month[data.month - 1]} ${data.year}`} images={data.photos} allImages={allPhoto} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery