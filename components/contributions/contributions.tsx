import { Description } from '@headlessui/react/dist/components/description/description'
import React from 'react'
import { ContriCard } from '../contricard'
import specter from "../../images/contributions/specter.png"
import matrix from "../../images/contributions/matrix.png"
import kiwix from "../../images/contributions/kiwix.jpeg"
import zulip from "../../images/contributions/zulip.png"
import gcp from "../../images/contributions/gcp.png"
import element from "../../images/contributions/element.svg"
import cops from "../../images/contributions/cops.png"
import { Fade } from 'react-awesome-reveal'
import { SiIterm2 } from 'react-icons/si'
import Link from "next/link"

export function Contributions() {
    const orgs = [
        {
            id:1,
            title: "Google Cloud Platform",
            description: 'Lets you build, deploy, and scale applications, websites, and services.',
            image: gcp,
            gitl: 'https://github.com/GoogleCloudPlatform',
            browl: 'https://cloud.google.com/'
        },
        {
            id:2,
            title: "Element",
            description: 'A secure communication and collaboration platform.',
            image: element,
            gitl: 'https://github.com/vector-im',
            browl: 'https://element.io/'
        },
        {
            id:2,
            title: "Specter Desktop",
            description: 'Offers free open-source product suite for Bitcoiners, Developers & Enterprise',
            image: specter,
            gitl: 'https://github.com/cryptoadvance',
            browl: 'https://specter.solutions/'
        },
        {
            id:3,
            title: "Matrix",
            description: 'Publishes the Matrix open standard for secure, decentralised, real-time communication',
            image: matrix,
            gitl: 'https://github.com/matrix-org',
            browl: 'https://matrix.org/'
    
        },
        {
            id:4,
            title: "Kiwix",
            description: 'Sharing Web content with people without Internet access. Go offline',
            image: kiwix,
            gitl: 'https://github.com/kiwix',
            browl: 'https://www.kiwix.org/en/'
    
        },
        {
            id:5,
            title: "Zulip",
            description: 'Zulip combines the immediacy of real-time chat with an email threading model.',
            image: zulip,
            gitl: 'https://github.com/zulip',
            browl: 'https://zulip.com/'
    
        },
    ]

    return (
        <div className="projects container px-8 py-5 mx-auto max-w-6xl lg:mb-28">
        <Fade direction="down" triggerOnce={true} >
        <h1 className="text-left font-Dosis text-3xl font-semibold text-gray-900 lg:text-4xl md:text-4xl dark:text-white md:mb-12 lg:mb-20 lg:mt-24 lg:-mt-20"><a className="text-blue-600">OSS Contributions</a></h1>
        <p className='lg:-mt-16 lg:mb-20 font-Roboto font-regular text-gray-600 dark:text-gray-400 lg:text-0.5xl md:text-1xl sm:text-1xl text-justify'>Click <Link href="https://docs.google.com/document/d/1AWEtws6Ur8v86UYlKtqvm9CaFnF0HP-pt4xwkZAazkk/edit?usp=sharing" passHref><a target="_blank" className="text-blue-600 hover:underline">here</a></Link> to view all OSS contributions.</p>
        </Fade>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:-mt-20 ">
            {orgs.map((item) => (
            <Fade direction="up" triggerOnce={true} delay={100*item.id} key={item.id}>
                <ContriCard title={item.title} key={item.id} description={item.description} image={item.image} gitl={item.gitl} browl={item.browl} />
            </Fade>
              ))}
            </div>
        </div>
    )

}
