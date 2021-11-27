import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import vercel from "../../public/vercel.svg"

export function Footer() {
  return (
    <>
    <hr className="mb-10 bg-gray-300 dark:bg-gray-800 mt-20"/>
    <div className="text-center font-RobotoC lg:text-2xl md:text-1xl sticky mb-10 ,ax-w-4xl">
    <p className="font-light mb-2">
      Made with &#127856; and &#128151; by <Link href="https://github.com/ankur12-1610" passHref><a className="text-blue-600">ankur12-1610</a></Link>
    </p>
    <p className="font-regular">
    Copyright &copy; 2021 | Ankur Patil
    </p>
    </div>
    </>
    );
}