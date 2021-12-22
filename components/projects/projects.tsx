import React from "react"
import Link from "next/link"
import Image from "next/image"
import axios from "../../images/projects/axios.png"
import djb from "../../images/projects/djb.png"
import drf from "../../images/projects/drf-logo.png"
import reactb from "../../images/projects/reactb.png"
import tictactoe from "../../images/projects/tictactoe.png"
import webdev from "../../images/projects/Vector.svg"
import logo from "../../images/logo.svg"
import { Card } from "../card"
import { Fade } from "react-awesome-reveal"


export function Projects() {

    const projects = [
        {
            id:1,
            title: "Webdev Rookies - Backend",
            description: "A backend server made for Webdev Rookies website, made with Django REST framework and setup on Heroku Postgresql for database management.",
            link: "https://github.com/ankur12-1610/webdev-rookies-backend",
            image: drf,
            height: "240px",
            width: "350px",
            tags: ['django-rest', 'postgresql', 'heroku']
        },
        {
            id:2,
            title: "Webdev Rookies - Frontend",
            description: "A fullstack webapp which has functionalities like Google Classroomm made with React and integrated to the backend server with Axios",
            link: "https://github.com/ankur12-1610/google-classroom-clone-frontend",
            image: webdev,
            height: "240px",
            width: "350px",
            tags: ['reactJs', 'axios', 'fullstack']
        },
        {
            id:3,
            title: "Todos List",
            description: "Todos List webapp with React and Bootstrap, with an interactive and improved UI.",
            link: "https://github.com/ankur12-1610/Todo-react",
            image: reactb,
            height: "240px",
            width: "350px",
            tags: ['reactjs', 'bootstrap', 'netlify']
        },
        {
            id:4,
            title: "Personal Portfolio",
            description: "Personal Portfolio website created with NextJs and Tailwind CSS.",
            link: "https://github.com/ankur12-1610/_.port._.folio._",
            image: logo,
            height: "240px",
            width: "350px",
            tags: ['nextJs', 'tailwind', 'vercel', 'gh-pages']
        },
        {
            id:5,
            title: "Personal Portfolio(dynamic)",
            description: "Personal Portfolio website created with Django and Bootstrap.",
            link: "https://github.com/ankur12-1610/itsankur",
            image: djb,
            height: "250px",
            width: "350px",
            tags: ['django', 'bootstrap', 'Heroku']
        },
        {   
            id:6,
            title: "Tic-Tac-Toe",
            description: "Webapp to play tic-tac-toe game as multiplayer or with unbeatable bot implementing minimax algorithm.",
            link: "https://github.com/ankur12-1610/Tic-Tac-Toe",
            image: tictactoe,
            height: "250px",
            width: "350px",
            tags: ['vannilajs', 'css', 'minimax-algo']
        },
    ]
    return (
        <div className="projects container px-8 py-5 mx-auto max-w-5xl ">
                        <Fade direction="down" triggerOnce>
         <h1 className="text-center font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white md:mb-12 lg:mb-36 "><a className="text-orange">Projects</a> <a className="text-blue-600">\(◦'⌣'◦)/</a></h1>
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
