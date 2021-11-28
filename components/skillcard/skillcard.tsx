import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export function SkillCard(props: any) {
  
  const { title, tags, key, image } = props;

  return (
<div className="flex flex-wrap place-items-center h-screen/2 lg:mr-6 md:mb-5">
    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out hover:shadow-2xl rounded-lg h-30 w-70 md:w-80 cursor-pointer m-auto hover:border-gradient-br-orange-blue-gray-50 border-gradient-br-blue-orange-gray-50 dark:border-gradient-br-blue-orange-bl dark:hover:border-gradient-br-orange-blue-bl border-transparent border-solid border-4 rounded-xl -mb-5 mt-8 ">
    
    <div className="w-full p-4 -mt-2">
    <p className="text-orange text-xl font-regular font-Dosis -mb-8">
        <Image src={image} alt={title} width={35} height={30} className="inline-block" />
        </p>
                <p className="text-orange text-xl font-regular font-Dosis mb-1 pl-10">
                {title}
            </p>
                <div className="flex flex-wrap justify-starts items-center text-xs text-white font-light font-Dosis">
                {tags.map((tag : string, i: number) => (
                  <span className="m-1 px-2 py-1 rounded bg-blue-600 " key={tag.toString()}>
                    {tags[i]}
                    </span>
                ))}
                </div>
            </div>
    </div>
</div>
  )
}