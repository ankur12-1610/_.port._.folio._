import React from "react"
import Link from "next/link"
import Image from "next/image"
import evs from "../../images/projects/evs.png"
import pract from "../../images/projects/pr-activity.png"
import hackalog from "../../images/projects/hackalog.png"
import axios from "../../images/projects/axios.png"
import djb from "../../images/projects/djb.png"
import drf from "../../images/projects/drf-logo.png"
import reactb from "../../images/projects/reactb.png"
import tictactoe from "../../images/projects/tictactoe.png"
import metamask from "../../images/projects/metamask-fox.svg"
import webdev from "../../images/projects/Vector.svg"
import logo from "../../images/logo.svg"
import covid19detector from "../../images/projects/covid19detector.png"
import { Card } from "../card"
import { Fade } from "react-awesome-reveal"


export function Projects() {

    const projects = [
        {   
            id:1,
            title: "SnapX",
            description: "SnapX is a MetaMask snap powered with notifications and account recovery features using biometric authentication. (Silver Medalist submission in ConsenSys’ MetaMask Snap Development Hackathon conducted at InterIIT Tech Meet 11.0 — February 2023)",
            link: "https://github.com/ankur12-1610/snapx",
            image: metamask,
            height: "250px",
            width: "350px",
            tags: ['MetaMask Snaps', 'Gatsby', 'REST APIs', 'FaceIO', 'AES', 'Bitcoin Protocols']
        },
        {   
            id:2,
            title: "Pull Request Action 🚀",
            description: "This GitHub action activates when a contributor raises a PR. It comments and reacts to the PR. Moreover, assigns the PR to the author.",
            link: "https://github.com/ankur12-1610/pull-request-action",
            image: pract,
            height: "250px",
            width: "350px",
            tags: ['github-actions', 'typescript', 'dockerfile']
        },
        {
            id:3,
            title: "Google Classroom Clone",
            description: "A fullstack webapp which has functionalities like Google Classroom. The frontend is made with React and integrated into the backend server with Axios and backend is built upon Django REST Framework.Postgresql for database management.",
            link: "https://github.com/ankur12-1610/Google-Classroom-Clone",
            image: drf,
            height: "240px",
            width: "350px",
            tags: ['reactJs', 'axios', 'fullstack', 'django-rest', 'postgresql', 'heroku']
        },
        {
            id:4,
            title: "Covid19 Detector",
            description: "A deep learning algorithm implemented to detect Covid-19 coronavirus with X-Ray images. ReLU, max pooling, flattening layer and a dropout layer of 20% dropout rate form the basis of the model. The model achieved an overwhelming accuracy of 97%.",
            link: "https://github.com/ankur12-1610/covid19_detector",
            image: covid19detector,
            height: "240px",
            width: "350px",
            tags: ['reactJs', 'axios', 'fullstack']
        },
        {
            id:5,
            title: "Hackalog Frontend",
            description: "The home for hackathons organised under COPS IIT(BHU)",
            link: "https://hackalog.copsiitbhu.co.in/",
            image: hackalog,
            height: "240px",
            width: "350px",
            tags: ['reactjs', 'bootstrap', 'netlify']
        },
        {
            id:6,
            title: "Personal Portfolio",
            description: "Personal Portfolio website created with NextJs and Tailwind CSS.",
            link: "https://github.com/ankur12-1610/_.port._.folio._",
            image: logo,
            height: "240px",
            width: "350px",
            tags: ['nextJs', 'tailwind', 'vercel', 'gh-pages']
        },
    ]
    return (
        <div className="projects container px-8 py-5 mx-auto max-w-6xl ">
                        <Fade direction="down" triggerOnce>
         <h1 className="text-left font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl md:mb-12 lg:mb-24 "><a className="text-blue-600">Projects</a></h1>
                        </Fade>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:-mt-20 ">
                <Fade direction="up" triggerOnce>
            {projects.map((item) => (
                <Card title={item.title} key={item.id} link={item.link} description={item.description} image={item.image} tags={item.tags} height={item.height} width={item.width} />
                ))}
                </Fade>
            </div>
        </div>
    )
}
