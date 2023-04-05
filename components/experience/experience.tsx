import React from 'react'
import { Fade } from 'react-awesome-reveal'


export function Experience() {
    const orgs = [
        {
            id:1,
            title: "The Linux Foundation Mentorship (LFX ‘23) @ Google CloudPlatform",
            role: "Student Developer",
            duration: "Mar 2023 - Present",
            description: "I'm currently doing my Linux Foundation Mentorship (LFX'23) under CNCF - GoogleCloudPlatform, in which I'm creating Lit Components for open sourcing the frontend of Testgird. The project is based on Lit Framework, GO, TypeScript and involves writing frontend tests.",
    
        },
        {
            id:2,
            title: "Silence Laboratories",
            role: 'Software Developer',
            duration: "Oct 2022 - Dec 2022",
            description: 'Reviewed cryptographic algorithms which were implemented in RUST. Got an exposure on lattice cryptography and RUST.',
    
        },
        {
            id:3,
            title: "GSoC like internship @ Element.io/Matrix.org",
            role: "Software Developer",
            duration: "Jul 2022 - Sep 2022",
            description: "Since I was not a beginner to open source and didn’t fall into the beginner to open-source guidelines of GSoC, I was offered an internship instead of an official GSoC project under Element.io (a subsidiary of Matrix.org), where I did the implementation of creating knockable rooms and wrote cypress tests for the same. Knocking is the feature that enables users to send a request to join any room or space. The language used was TypeScript and the whole project was based on MERN.",
    
        },
        {
            id:4,
            title: "Summer of Bitcoin’ 22 @ Specter Desktop",
            role: "Student Developer",
            duration: "May 2022 - Aug 2022",
            description: "I did my Summer of Bitcoin’22 under Specter Desktop, where I implemented JWT Authentication to REST API for improving the security of the API and making the API more scalable. I also wrote the pytests for the same. The project was implemented in Flask, with which I had no prior experience but I knew Django so I caught up quickly with Flask and finished the project on time.",
        }
    ]


    return (
        <div className="container px-8 py-5 mx-auto max-w-6xl lg:mb-28">
        <Fade direction="down" triggerOnce={true} >
         <h1 className="text-left font-Dosis text-3xl font-semibold text-gray-900 lg:text-4xl md:text-4xl dark:text-white md:mb-12 lg:mb-20 lg:mt-26 lg:-mt-20"><a className="text-blue-600">Experience</a></h1>
        </Fade>
            <ul className="lg:-mt-6 border-l-2 \border-primary dark:border-primary-500">
            {orgs.map((item) => (
            <Fade direction="up" triggerOnce={true} delay={100*item.id} key={item.id}>
            <li>
                <h4 className="pl-6 font-regular text-orange font-Dosis md:text-2xl text-2xl text-left">{item.title}</h4>
                <div className="ml-6 mb-6 pb-6">
                <div className="flex">
                    <div className="w-1/2" id='2'><p className="font-Roboto md:text-lg font-regular gray:500 dark:text-gray-400 text-left sm:text-left">{item.duration}</p></div>
                </div>
                <p className="font-Roboto font-regular dark:text-gray-400 text-gray-600 lg:text-0.5xl md:text-1xl sm:text-1xl text-justify">
                {item.description}
                </p>
                </div>
            </li>
            </Fade>
              ))}
            </ul>
            <hr className="lg:-mb-10 mt-10 bg-gray-600 dark:bg-gray-800"/>
        </div>

    )

}
