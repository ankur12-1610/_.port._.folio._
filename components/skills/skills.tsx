import React from "react"
import { SkillCard } from "../skillcard/skillcard"
import web from "../../images/skills/web.png"
import { SiTorbrowser, SiDjango, SiNextdotjs, SiOctopusdeploy } from "react-icons/si"
import { AiFillAlert, AiFillCode } from "react-icons/ai"
import { GrDeploy } from "react-icons/gr"
import { MdOutlineDesignServices } from "react-icons/md"
import { Fade } from "react-awesome-reveal"


export function Skills() {

    const skills = [
        {
            id:1,
            title: "Web Development",
            tags: ['HTML5', 'CSS3', 'ECMA6'],
            image: web,
            icon: <SiTorbrowser />
        },
        {
            id:2,
            title: "Languages",
            tags: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'Solidity'],
            image: web,
            icon: <AiFillCode />
        },
        {
            id:3,
            title: "Backend Frameworks",
            tags: ['Django', 'Django REST Framework','Flask'],
            image: web,
            icon: <SiDjango />
        },
        {
            id:4,
            title: "Frontend Frameworks",
            tags: ['NextJs', 'ReactJs'],
            image: web,
            icon: <SiNextdotjs/>
        },
        {
            id:5,
            title: "Deployment",
            tags: ['Netlify', 'Heroku', 'Vercel', 'gh-pages', 'AWS'],
            image: web,
            icon: <SiOctopusdeploy />
        },
        {   
            id:6,
            title: "Design",
            tags: ['Figma', 'Illustator', 'Photoshop'],
            image: web,
            icon: <MdOutlineDesignServices />
        },
    ]
    return (
        <div className="container px-8 py-5 mx-auto max-w-5xl lg:mb-28">
        <Fade direction="down" triggerOnce >
         <h1 className="text-center font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white md:mb-12 lg:mb-20 "><a className="text-orange">Skills</a> <a className="text-blue-600">(⌐■_■)</a></h1>
        </Fade>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:-mt-20 ">

            {skills.map((item) => (
                <Fade direction="down" triggerOnce delay={100*item.id} key={item.id}>
                <SkillCard title={item.title} key={item.id} tags={item.tags} image={item.image} icon={item.icon}/>
                </Fade>
              ))}
            </div>
            <hr className="bg-gray-400 mt-16 dark:bg-gray-800"/>
        </div>
    )
}
