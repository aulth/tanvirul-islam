import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { MdClose, MdNavigateNext } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { BsForward } from 'react-icons/bs';

const Row = ({ time, images, allImages }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightBox = (image) => {
        if (typeof window != undefined) {
            let index = allImages.findIndex(img=>img.src===image);
            setCurrentImage(index);
            setViewerIsOpen(true);
            history.pushState({ viewerIsOpen: true }, '', window.location.href);
        }
    };
    const nextImage = ()=>{
        setCurrentImage((prevImage) => (prevImage + 1) % allImages.length);
    }
    const prevImage = ()=>{
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

    return (
        <div className="w-full">
            <h4 className="font-semibold text-sm">{time}</h4>
            <div className="w-full grid gap-1 grid-cols-3 md:grid-cols-9 mt-2 pb-1">
                {images && images.length>0 && images.map((image, index) => (
                    <div key={index} className="aspect-square relative" onClick={() => openLightBox(image.src)}>
                        <Image src={image.src} layout="fill" objectFit="cover" alt="image" />
                    </div>
                ))}
            </div>
            {viewerIsOpen && (
                <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className="bg-black z-20 h-screen overflow-y-hidden w-full fixed top-0 left-0">
                    <div className="w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh]">
                        <div className="w-full h-full bg-green relative">
                            <Image src={allImages[currentImage].src} alt="gallery_image" layout="fill" objectFit="contain" />
                        </div>
                    </div>
                    <div className="fixed top-3 left-3 text-white text-sm flex md:gap-2 flex-col md:flex-row md:items-center pr-6">
                        <p className='font-semibold  md:border-r pr-2'>{allImages[currentImage].caption[0].toUpperCase()+allImages[currentImage].caption.slice(1)}</p>
                        <p className='text-[12px] md:mt-1'>{allImages[currentImage].date}</p>
                    </div>
                    <button onClick={closeLightBox} className="text-white text-xl fixed top-3 right-3"><MdClose/></button>
                    <button onClick={prevImage} className="text-black text-xl fixed md:top-1/2  md:bottom-auto bottom-4 md:-translate-y-1/2 md:left-3 md:right-auto right-12 bg-white p-0.5 rounded-full border shadow-white"><MdNavigateNext className='rotate-180' /> </button>
                    <button onClick={nextImage} className="text-black text-xl fixed md:top-1/2 md:bottom-auto bottom-4 md:-translate-y-1/2 right-3 bg-white p-0.5 rounded-full border shadow-white"><MdNavigateNext/> </button>
                    {/* <span className="text-white text-sm fixed  md:bottom-0 bottom-4 md:-translate-y-1/2 left-1/2 -translate-x-1/2  shadow-white">{images[currentImage].date}</span> */}
                </div>
            )}
        </div>
    );
};

export default Row;
