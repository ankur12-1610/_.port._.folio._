import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';


export function SkillCard(props: any) {
  
  const { title, tags, key, image, icon } = props;

  return (
<div className="flex flex-wrap place-items-center h-screen/2 lg:mr-6 md:mb-5">
    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out hover:shadow-2xl rounded-lg h-30 w-lg md:w-80 m-auto hover:border-gradient-br-orange-blue-gray-50 border-gradient-br-blue-orange-gray-50 dark:border-gradient-br-blue-orange-bl dark:hover:border-gradient-br-orange-blue-bl border-transparent border-solid border-4 rounded-xl -mb-5 mt-8 ">
    <div className="w-full p-4 -mt-2">
    <p className="text-black dark:text-white text-xl font-regular font-Dosis -mb-6">
    {icon}
        </p>
                <p className="text-orange text-xl font-regular font-Dosis mb-1 pl-8">
                {title}
            </p>
                <div className="flex flex-wrap justify-starts items-center text-xs text-white font-light font-Dosis -mb-2">
                {tags.map((tag : string, i: number) => (
                  <Fade direction="up" triggerOnce={true} key={i} delay={500}>
                  <span className="m-1 px-2 py-1 rounded bg-blue-600 " key={tag.toString()}>
                    {tags[i]}
                    </span>
                  </Fade>
                ))}
                </div>
            </div>
    </div>
</div>
  )
}