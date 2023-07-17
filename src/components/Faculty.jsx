import Image from "next/image";
import React from "react";

export default function Faculty() {
 
    return (
        <>
            <div className="container mx-auto p-8 border-b ">
            <h2 className="text-center text-2xl font-bold flex gap-2  items-center"><Image src="/image/degree.png" width={30} height={30} alt="Faculty" className='mt-1'/> Faculty</h2>
                <ul className="grid gap-2 md:grid-cols-3 grid-cols-1 mt-4 list-decimal list-inside">
                    <li>Mohd Usman</li>
                    <li>Mohd Usman</li>
                    <li>Mohd Usman</li>
                    <li>Mohd Usman</li>
                    <li>Mohd Usman</li>
                    <li>Mohd Usman</li>
                    <li>Mohd Usman</li>
                </ul>
            </div>
        </>
    );
}
