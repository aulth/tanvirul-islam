import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdClose, MdDelete, MdNavigateNext } from 'react-icons/md';
import toast from 'react-hot-toast';

const Row = ({ time, images, allImages, getAllImages }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    function parseISODate(inputDate) {
        const date = new Date(inputDate);
        return isNaN(date) ? "Invalid date format" : date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    }
    const openLightBox = (image) => {
        if (typeof window != undefined) {
            let index = allImages.findIndex(img => img.url === image);
            setCurrentImage(index);
            setViewerIsOpen(true);
            history.pushState({ viewerIsOpen: true }, '', window.location.href);
        }
    };
    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % allImages.length);
    }
    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + allImages.length) % allImages.length);
    }
    const handleSlide = (direction) => {
        if (direction === 'forward') {
            nextImage();
        } else if (direction === 'backward') {
            prevImage();
        }
    };

    let startX;
    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (diffX > 50) {
            // Sliding left (forward)
            handleSlide('forward');
        } else if (diffX < -50) {
            // Sliding right (backward)
            handleSlide('backward');
        }
    };
    const closeLightBox = () => {
        window.history.back();
        setViewerIsOpen(false);
    };
    useEffect(() => {
        const handlePopstate = () => {
            if (viewerIsOpen) {
                setViewerIsOpen(false);
            }
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, [viewerIsOpen]);

    useEffect(() => {
        if (typeof window != undefined) {
            document.addEventListener('keydown', function (event) {
                if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
                    prevImage();
                } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
                    nextImage();
                }
                else if (event.key === 'Backspace') {
                    closeLightBox();
                }
            });
        }
    }, [])

    const deleteImage = async (id) => {
        const res = await fetch("/api/admin/gallery/delete", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ id: id, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        const json = await res.json()
        if (json.success) {
            toast.success(json.msg);
        } else {
            toast.error(json.msg)
        }
        getAllImages();
    }
    return (
        <div className="w-full">
            <h4 className="font-semibold text-sm">{time}</h4>
            <div className="w-full grid gap-1 grid-cols-3 md:grid-cols-9 mt-2 pb-1">
                {images && images.length > 0 && images.map((image, index) => (
                    <div key={index} className="aspect-square relative">
                        <Image src={image.url} layout="fill" objectFit="cover" className='cursor-pointer' alt="image"  onClick={() => openLightBox(image.url)} />
                        <button onClick={()=>{deleteImage(image._id)}} className="aspect-square p-1 absolute z-10 top-0 left-0 bg-red-500 text-white"><MdDelete /></button>
                    </div>
                ))}
            </div>
            {viewerIsOpen && (
                <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className="bg-black z-20 h-screen overflow-y-hidden w-full fixed top-0 left-0">
                    <div className="w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh]">
                        <div className="w-full h-full bg-green relative">
                            <Image src={allImages[currentImage].url} alt="gallery_image" layout="fill" objectFit="contain" />
                        </div>
                    </div>
                    <div className="fixed top-3 left-3 text-white text-sm flex md:gap-2 flex-col md:flex-row md:items-center pr-6">
                        <p className='font-semibold  md:border-r pr-2'>{allImages[currentImage].title[0].toUpperCase() + allImages[currentImage].title.slice(1)}</p>
                        <p className='text-[12px] md:mt-1'>{parseISODate(allImages[currentImage].createdAt)}</p>
                    </div>
                    <button onClick={closeLightBox} className="text-white text-xl fixed top-3 right-3"><MdClose /></button>
                    <button onClick={prevImage} className="text-black text-xl fixed md:top-1/2  md:bottom-auto bottom-4 md:-translate-y-1/2 md:left-3 md:right-auto right-12 bg-white p-0.5 rounded-full border shadow-white"><MdNavigateNext className='rotate-180' /> </button>
                    <button onClick={nextImage} className="text-black text-xl fixed md:top-1/2 md:bottom-auto bottom-4 md:-translate-y-1/2 right-3 bg-white p-0.5 rounded-full border shadow-white"><MdNavigateNext /> </button>
                    {/* <span className="text-white text-sm fixed  md:bottom-0 bottom-4 md:-translate-y-1/2 left-1/2 -translate-x-1/2  shadow-white">{images[currentImage].date}</span> */}
                </div>
            )}
        </div>
    );
};

export default Row;
