import React from "react"
import Link from "next/link"
import Image from "next/image"
import profile from "../../images/pp.png"
import devto from "../../images/devto.svg"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from "react-icons/ai"
export function Cintro() {
    return (
        <div className="container px-8 py-5 mx-auto max-w-5xl">
            <div className="lg:space-x-5 mb-8 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white">
                        <a className="text-orange">Ankur</a> <a className="text-blue-600">Patil</a>
                    </h1>
                    <div className="font-RobotoC font-light mt-5 dark:text-white lg:text-2xl md:text-2xl sm:text-1xl">
                        <p>
                         from <a className="text-blue-600">ankur12-1610</a> import *
                        </p>
                            <p><a className="text-blue-600">ankur12-1610</a> = [<a className="text-orange">'backend'</a>, <a className="text-orange">'frontend'</a>, <a className="text-orange">'open-source'</a>, <a className="text-orange">'design'</a>] </p>
                            <p><a className="text-blue-600">ankur12-1610</a>.append(<a className="text-orange">'still learning'</a>)</p>
                        <div className="lg:mr-10 py-8 grid grid-cols-5 gap-4">
                        <div><Link href="mailto:ankur.patil.cd.mat20@itbhu.ac.in" passHref><a target="_blank"><button className="text-orange"><AiFillMail size={35}/></button></a></Link></div>
                            <div><Link href="https://www.linkedin.com/in/ankur-patil-a112a3202/" passHref><a target="_blank"><button className="text-lcolor"><AiFillLinkedin size={35}/></button></a></Link></div>
                            <div><Link href="https://github.com/ankur12-1610" passHref><a target="_blank"><button><AiFillGithub size={35}/></button></a></Link></div>
                            <div><Link href="https://twitter.com/ankurrap" passHref><a target="_blank"><button className="text-lcolor"><AiFillTwitterCircle size={35}/></button></a></Link></div>
                            <div><Link href="https://dev.to/ankur121610" passHref><a target="_blank"><button ><Image className="dark:bg-white rounded-md" src={devto} height={35} width={35} /></button></a></Link></div>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:pl-28 md:mt-2 mb-4">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
            <hr className="mb-5 bg-gray-300 dark:bg-gray-800"/>
        </div>
    )
}