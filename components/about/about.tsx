import React from "react"
import Link from "next/link"
import Image from "next/image"
import Naruto from "../../images/naruto.webp"
import profile from "../../images/pp.jpeg"
import { Fade } from "react-awesome-reveal"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from "react-icons/ai"
import { SiHashnode } from "react-icons/si"

export function About() {
    return (
        <div className="container px-8 py-5 mx-auto max-w-6xl lg:mb-24">
           <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
           <Fade direction="up" triggerOnce delay={200}>
                <div className="lg:px-4 lg:mt-12 ">
                    <div className="font-Roboto font-regular mt-5 dark:text-gray-400 text-gray-600 lg:text-1xl md:text-2xl sm:text-1xl text-justify">
                    <p className="mb-5">Hi &#128075;,</p>
                        <p className="mt-5">I'm Ankur Patil, a Mathematics and Computing undergraduate at IIT (BHU) Varanasi. As a tech enthusiast and open-source contributor, I am deeply passionate about exploring and leveraging cutting-edge technologies. </p>
                        <p className="mt-5">My expertise lies in APIs, Full Stack Webapps, Github Actions, and Blockchain. I am currently focused on the exciting fields of Cloud Computing and Cryptography.</p>
                        <p className="mt-5">In my spare time, I enjoy sharing my knowledge with the tech community through my technical <Link href="https://www.blog.ankur.codes/" passHref><a target="_blank" className="text-blue-600 hover:underline">blog</a></Link>.</p>
                        <p className="mt-5 mb-5">Feel free to reach me on my handles mentioned above (although I'm more active on <Link href="https://www.linkedin.com/in/ankur-patil-a112a3202/" passHref><a target="_blank" className="text-blue-600 hover:underline">Linkedin</a></Link> &#128517;). Thanks for visiting my website :) </p>
                    </div>
                    <div className="lg:mr-10 py-8 grid grid-cols-5 gap-2">
                        <Fade direction="up" triggerOnce delay={900}>
                            <div><Link href="mailto:ankur.patil.cd.mat20@itbhu.ac.in" passHref><a target="_blank"><button className="text-orange"><AiFillMail size={35}/></button></a></Link></div>
                        </Fade>
                        <Fade direction="up" triggerOnce delay={900}>
                            <div><Link href="https://www.linkedin.com/in/ankur-patil-a112a3202/" passHref><a target="_blank"><button className="text-lcolor"><AiFillLinkedin size={35}/></button></a></Link></div>
                        </Fade> 
                        <Fade direction="up" triggerOnce delay={900}>
                            <div><Link href="https://github.com/ankur12-1610" passHref><a target="_blank"><button><AiFillGithub size={35}/></button></a></Link></div>
                        </Fade>
                        <Fade direction="up" triggerOnce delay={900}>
                            <div><Link href="https://twitter.com/ankurrap" passHref><a target="_blank"><button className="text-lcolor"><AiFillTwitterCircle size={35}/></button></a></Link></div>
                        </Fade>
                        <Fade direction="up" triggerOnce delay={900}>
                            <div><Link href="https://hashnode.com/@ankur12" passHref><a target="_blank"><button ><SiHashnode size={35} /></button></a></Link></div>
                        </Fade>
                    </div>
                </div>
            </Fade>
           <div className="flex-shrink-0 lg:pt-16 lg:px-4 md:mt-2 mb-4 md:pt-5 sm:pt-5">
           <Fade direction="down" triggerOnce delay={200}>
                <Image
                    src={profile}
                    alt="Profile Pic"
                    priority={true}
                    className="rounded-full"
                    width={300}
                    height={300}
                />
            </ Fade>
            </div>
            </div>
            <hr className="-mb-5 bg-gray-600 dark:bg-gray-800"/>
        </div>
    )
}
