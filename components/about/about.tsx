import React from "react"
import Link from "next/link"
import Image from "next/image"
import Naruto from "../../images/naruto.gif"
import { apiResolver } from "next/dist/server/api-utils"
import { Fade } from "react-awesome-reveal"

export function About() {
    return (
        <div className="container px-8 py-5 mx-auto max-w-5xl mb-24">
        <Fade direction="up">
         <h1 className="text-center font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white"><a className="text-orange">About</a> <a className="text-blue-600">\('O')/</a></h1>
        </Fade>
           <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
             <div className="flex-shrink-0 lg:pt-16 lg:px-4 md:mt-2 mb-4 md:pt-5 sm:pt-5">
             <Fade direction="left">
                <Image
                    src={Naruto}
                    alt="Naruto"
                    priority={true}
                    className="rounded-sm"
                    width={350}
                    height={300}
                />
            </Fade>
             </div>
             <Fade direction="right">
                <div className="lg:px-4 lg:mt-12 ">
                    <div className="font-RobotoC font-light mt-5 dark:text-white lg:text-2xl md:text-2xl sm:text-1xl text-justify">
                        <p className="mb-5">Hemlo &#128075;,</p>
                        <p className="mt-5">I'm Ankur Patil, a Mathematics and Computing undergraduate at IIT (BHU) Varanasi. I fell in love with programming and tech in my freshman year.</p>
                        <p className="mt-5">WebDev has caught my attention right from the start of my programming journey and has always startled me. I love exploring new tech and have worked with various technologies. I enjoy building REST APIs, Full-Stack Webapps and static websites. </p>
                        <p className="mt-5">I &#128151; contributing to Open Source and building something that can help people.</p>
                        <p className="mt-5 mb-5">Feel free to reach me on my handles mentioned above (although I'm more active on <Link href="https://www.linkedin.com/in/ankur-patil-a112a3202/" passHref><a target="_blank" className="text-blue-600">Linkedin</a></Link> &#128517;). Thanks for visiting my website :) </p>

                    </div>
                </div>
                </Fade>
            </div>
            <hr className="mt-10 bg-gray-400 -mb-20 dark:bg-gray-800"/>
        </div>
    )
}
