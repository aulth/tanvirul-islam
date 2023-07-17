import Image from "next/image";
import React, { useState, useRef } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function Projects() {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handlePrev = () => {
        const container = containerRef.current;
        const scrollAmount = container.offsetWidth;
        container.scrollTo({
            left: scrollPosition - scrollAmount,
            behavior: "smooth",
        });
        setScrollPosition((prevScrollPosition) => prevScrollPosition - scrollAmount);
    };

    const handleNext = () => {
        const container = containerRef.current;
        const scrollAmount = container.offsetWidth;
        container.scrollTo({
            left: scrollPosition + scrollAmount,
            behavior: "smooth",
        });
        setScrollPosition((prevScrollPosition) => prevScrollPosition + scrollAmount);
    };

    return (
        <>
            <style>
                {`
          /* Hide native scrollbar */
          .flex::-webkit-scrollbar {
            display: none;
          }

          /* Mobile Styles */
          @media (max-width: 767px) {
            .flex {
              scroll-snap-type: x mandatory;
              overflow-x: scroll;
              -webkit-overflow-scrolling: touch;
            }

            .rounded {
              scroll-snap-align: start;
            }
          }
        `}
            </style>
            <div className="container mx-auto p-8 border-b ">
                <h2 className="text-center text-xl font-bold underline underline-offset-4">Alumni</h2>
                <div className="flex gap-3 p-2 pl-0 overflow-x-auto overflow-y-hidden flex-row mt-8" ref={containerRef}>
                    <div className="w-52 shrink-0 bg-gray-200 aspect-[4/5] relative shadow-md">
                        <div className="w-full aspect-[4/5] relative overflow-hidden">
                            <Image src="https://source.unsplash.com/random/?alumni" layout="fill" objectFit="cover" className=" hover:scale-110 duration-75" alt="alumni" />
                        </div>
                        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 to-transparent h-1/2 z-10 flex flex-col justify-end p-2">
                            <h3 className="font-bold text-sm text-white shadow-sm">Mohd Usman</h3>
                            <h3 className="font-semibold text-sm text-white shadow-sm">Jamia Millia Islamia New Delhi India 110025</h3>
                        </div>
                    </div>
                    <div className="w-52 shrink-0 bg-gray-200 aspect-[4/5] relative shadow-md">
                        <div className="w-full aspect-[4/5] relative overflow-hidden">
                            <Image src="https://source.unsplash.com/random/?alumni" layout="fill" objectFit="cover" className=" hover:scale-110 duration-75" alt="alumni" />
                        </div>
                        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 to-transparent h-1/2 z-10 flex flex-col justify-end p-2">
                            <h3 className="font-bold text-sm text-white shadow-sm">Mohd Usman</h3>
                            <h3 className="font-semibold text-sm text-white shadow-sm">Jamia Millia Islamia New Delhi India 110025</h3>
                        </div>
                    </div>
                    <div className="w-52 shrink-0 bg-gray-200 aspect-[4/5] relative shadow-md">
                        <div className="w-full aspect-[4/5] relative overflow-hidden">
                            <Image src="https://source.unsplash.com/random/?alumni" layout="fill" objectFit="cover" className=" hover:scale-110 duration-75" alt="alumni" />
                        </div>
                        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 to-transparent h-1/2 z-10 flex flex-col justify-end p-2">
                            <h3 className="font-bold text-sm text-white shadow-sm">Mohd Usman</h3>
                            <h3 className="font-semibold text-sm text-white shadow-sm">Jamia Millia Islamia New Delhi India 110025</h3>
                        </div>
                    </div>
                    <div className="w-52 shrink-0 bg-gray-200 aspect-[4/5] relative shadow-md">
                        <div className="w-full aspect-[4/5] relative overflow-hidden">
                            <Image src="https://source.unsplash.com/random/?alumni" layout="fill" objectFit="cover" className=" hover:scale-110 duration-75" alt="alumni" />
                        </div>
                        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 to-transparent h-1/2 z-10 flex flex-col justify-end p-2">
                            <h3 className="font-bold text-sm text-white shadow-sm">Mohd Usman</h3>
                            <h3 className="font-semibold text-sm text-white shadow-sm">Jamia Millia Islamia New Delhi India 110025</h3>
                        </div>
                    </div>
                    <div className="w-52 shrink-0 bg-gray-200 aspect-[4/5] relative shadow-md">
                        <div className="w-full aspect-[4/5] relative overflow-hidden">
                            <Image src="https://source.unsplash.com/random/?alumni" layout="fill" objectFit="cover" className=" hover:scale-110 duration-75" alt="alumni" />
                        </div>
                        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 to-transparent h-1/2 z-10 flex flex-col justify-end p-2">
                            <h3 className="font-bold text-sm text-white shadow-sm">Mohd Usman</h3>
                            <h3 className="font-semibold text-sm text-white shadow-sm">Jamia Millia Islamia New Delhi India 110025</h3>
                        </div>
                    </div>
                    <div className="w-52 shrink-0 bg-gray-200 aspect-[4/5] relative shadow-md">
                        <div className="w-full aspect-[4/5] relative overflow-hidden">
                            <Image src="https://source.unsplash.com/random/?alumni" layout="fill" objectFit="cover" className=" hover:scale-110 duration-75" alt="alumni" />
                        </div>
                        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 to-transparent h-1/2 z-10 flex flex-col justify-end p-2">
                            <h3 className="font-bold text-sm text-white shadow-sm">Mohd Usman</h3>
                            <h3 className="font-semibold text-sm text-white shadow-sm">Jamia Millia Islamia New Delhi India 110025</h3>
                        </div>
                    </div>
                    <div className="w-52 shrink-0 bg-gray-200 aspect-[4/5] relative shadow-md">
                        <div className="w-full aspect-[4/5] relative overflow-hidden">
                            <Image src="https://source.unsplash.com/random/?alumni" layout="fill" objectFit="cover" className=" hover:scale-110 duration-75" alt="alumni" />
                        </div>
                        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 to-transparent h-1/2 z-10 flex flex-col justify-end p-2">
                            <h3 className="font-bold text-sm text-white shadow-sm">Mohd Usman</h3>
                            <h3 className="font-semibold text-sm text-white shadow-sm">Jamia Millia Islamia New Delhi India 110025</h3>
                        </div>
                    </div>
                    <div className="w-52 shrink-0 bg-gray-200 aspect-[4/5] relative shadow-md">
                        <div className="w-full aspect-[4/5] relative overflow-hidden">
                            <Image src="https://source.unsplash.com/random/?alumni" layout="fill" objectFit="cover" className=" hover:scale-110 duration-75" alt="alumni" />
                        </div>
                        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-800 to-transparent h-1/2 z-10 flex flex-col justify-end p-2">
                            <h3 className="font-bold text-sm text-white shadow-sm">Mohd Usman</h3>
                            <h3 className="font-semibold text-sm text-white shadow-sm">Jamia Millia Islamia New Delhi India 110025</h3>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto md:flex hidden justify-end">
                    <button onClick={handlePrev} className="prev-button">
                        <MdOutlineNavigateNext className="rotate-180 text-xl" />
                    </button>
                    <button onClick={handleNext} className="next-button">
                        <MdOutlineNavigateNext className=" text-xl" />
                    </button>
                </div>
            </div>
        </>
    );
}
