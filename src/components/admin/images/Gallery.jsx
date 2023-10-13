import React, { useEffect, useContext, useState } from "react";
import Row from "./Row";
import ImageUpload from "./ImageUpload";
const Gallery = () => {
  const [allPhoto, setAllPhoto] = useState();
  const [groupedByMonth, setGroupedByMonth] = useState();
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
  const getAllImages = async () => {
    const res = await fetch("/api/admin/gallery/getall", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
    })
    const json = await res.json()
    const { photosGroupedByMonth, allImages } = groupPhotosByMonth(json.gallery);
    setGroupedByMonth(photosGroupedByMonth);
    setAllPhoto(allImages);
  }
  useEffect(() => {
    getAllImages();
  }, [])
  return (
    <>
      <div className="w-full p-4">
        <ImageUpload getAllImages={getAllImages} />
      </div>
      <div className="container mx-auto p-5 pt-4 grid grid-cols-1 gap-2">
        {
          groupedByMonth && groupedByMonth.length > 0 && groupedByMonth.map((data, index) => {
            return <Row key={index} time={`${month[data.month - 1]} ${data.year}`} getAllImages={getAllImages} images={data.photos} allImages={allPhoto} />
          })
        }
      </div>
    </>
  )
}

export default Gallery