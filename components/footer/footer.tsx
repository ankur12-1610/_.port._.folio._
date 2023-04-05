import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import vercel from "../../public/vercel.svg"

export function Footer() {
  return (
    <>
    <hr className="mb-10 bg-gray-300 dark:bg-gray-800 lg:mt-6 md:mt-20 "/>
    <div className="text-center mb-10 font-RobotoC lg:text-2xl md:text-1xl sticky ">
    <p className="font-light mb-2 text-black dark:text-white" >
      Made with &#127856; and &#128151; by <Link href="https://github.com/ankur12-1610" passHref><a className="text-blue-600">ankur12-1610</a></Link>
    </p>
    <p className="font-regular text-black dark:text-white">
    Copyright &copy; 2023 | Ankur Patil
    </p>
    </div>
    </>
    );
}