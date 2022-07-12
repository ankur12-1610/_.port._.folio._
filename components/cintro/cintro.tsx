import React from "react"
import Link from "next/link"
import Image from "next/image"
import profile from "../../images/pp.jpeg"
import devto from "../../images/devto.svg"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from "react-icons/ai"
import { SiHashnode } from "react-icons/si"
import { Fade } from "react-awesome-reveal"

export function Cintro() {
    return (
        <div className="container px-8 py-5 mx-auto max-w-5xl">
            <div className="lg:space-x-5 mb-8 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <Fade direction="down" triggerOnce delay={200}>
                    <h1 className="font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white">
                        <a className="text-orange">Ankur</a> <a className="text-blue-600">Patil</a>
                    </h1>
                    </Fade>
                    <div className="font-RobotoC font-light mt-5 dark:text-white lg:text-2xl md:text-2xl sm:text-1xl">
                    <Fade direction="up" triggerOnce delay={300}>
                        <p>
                         from <a className="text-blue-600">ankur12-1610</a> import *
                        </p>
                    </Fade>
                    <Fade direction="down" triggerOnce delay={500}>
                            <p><a className="text-blue-600">ankur12-1610</a> = [<a className="text-orange">'backend'</a>, <a className="text-orange">'frontend'</a>, <a className="text-orange">'open-source'</a>, <a className="text-orange">'design'</a>] </p>
                    </Fade>
                    <Fade direction="up" triggerOnce delay={700}>
                            <p><a className="text-blue-600">ankur12-1610</a>.append(<a className="text-orange">'still learning'</a>)</p>
                    </Fade>
                        <div className="lg:mr-10 py-8 grid grid-cols-5 gap-4">
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
                </div>
                <Fade direction="down" triggerOnce delay={200}>
                <div className="flex-shrink-0 lg:mt-12 lg:pl-28 md:mt-2 mb-4">
                    <Image
                        src={profile}
                        alt="Profile Pic"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                    />
                </div>
                </Fade>
            </div>
            <hr className="mb-5 bg-gray-300 dark:bg-gray-800"/>
        </div>
    )
}
