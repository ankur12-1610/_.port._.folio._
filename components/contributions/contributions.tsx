import { Description } from '@headlessui/react/dist/components/description/description'
import React from 'react'
import { Fade } from "react-awesome-reveal"
import { ContriCard } from '../contricard'
import matrix from "../../images/contributions/matrix.png"
import zulip from "../../images/contributions/zulip.png"
import saic from "../../images/contributions/SAIC.png"
import cops from "../../images/contributions/cops.png"

export function Contributions() {
    const orgs = [
        {
            id:1,
            title: "Matrix",
            description: 'Publishes the Matrix open standard for secure, decentralised, real-time communication',
            image: matrix,
            gitl: 'https://github.com/matrix-org',
            browl: 'https://matrix.org/'
    
        },
        {
            id:2,
            title: "Zulip",
            description: 'Zulip combines the immediacy of real-time chat with an email threading model.',
            image: zulip,
            gitl: 'https://github.com/zulip',
            browl: 'https://zulip.com/'
    
        },
        {
            id:3,
            title: "SAIC IIT BHU",
            description: 'Student Alumni Interaction Cell of  IIT (BHU) Varanasi',
            image: saic,
            gitl: 'https://github.com/ag602/SAIC',
            browl: 'https://saic.iitbhu.ac.in/'
        },
        {
            id:4,
            title: "COPS IIT BHU",
            description: 'Club of Programmers, Indian Institute of Technology (BHU) Varanasi',
            image: cops,
            gitl: 'https://github.com/COPS-IITBHU',
            browl: 'https://www.copsiitbhu.co.in/'
        },
    ]

    return (
        <div className="container px-8 py-5 mx-auto max-w-5xl lg:mb-28">
         <h1 className="text-center font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white md:mb-12 lg:mb-20 mt-26 lg:-mt-20"><a className="text-orange">Contributions</a> <a className="text-blue-600">(＾ｖ＾)</a></h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:-mt-12 sm:px-6 lg:px-10">
            {orgs.map((item) => (
                <ContriCard title={item.title} key={item.id} description={item.description} image={item.image} gitl={item.gitl} browl={item.browl} />
              ))}
            </div>
        </div>
    )

}
