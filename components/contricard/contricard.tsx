import React from 'react';
import Image from 'next/image';
import { Description } from '@headlessui/react/dist/components/description/description';
import { AiFillGithub } from 'react-icons/ai'
import { SiTorbrowser } from 'react-icons/si';
import Link from 'next/link';

export function ContriCard(props: any) {

    const { title, key, image, description, gitl, browl } = props;

    return (
<div className="flex flex-col justify-center h-screen/2 shadow-lg transition duration-500 ease-in-out hover:shadow-2xl rounded-lg h-30 max-w-xlg md:w-80 m-auto hover:border-gradient-br-orange-blue-gray-50 border-gradient-br-blue-orange-gray-50 dark:border-gradient-br-blue-orange-bl dark:hover:border-gradient-br-orange-blue-bl border-transparent border-solid border-4 rounded-xl -mb-4 mt-8 ">
	<div
		className="relative flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0 rounded-xl lg:pl-2 md:pl-2 max-w-xlg md:max-w-xlg mx-auto bg-none lg:h-60 md:h-60">
		<div className="w-full md:w-1/4 bg-none grid place-items-center">
			<Image src={image} alt="tailwind logo" className="rounded-xl" />
    </div>
			<div className="w-full md:w-2/3 bg-none flex flex-col space-y-2 p-2 bg-none">
				<div className="flex justify-between item-center">
					<div className="flex items-center">
					</div>
				</div>
				<h3 className="font-regular text-orange font-Dosis md:text-3xl text-1xl text-right">{title}</h3>
				<p className="md:text-lg text-gray-500 text-right">{description}</p>
			</div>
            <div className="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-light font-Dosis">
                </div>
		</div>
        <div className="grid grid-cols-3 space-x-5 justify-between text-3xl mb-4 lg:ml-28 md:ml-28 pl-20 ">
        <Link href={browl} passHref>
            <a>
                  <span >
                    <SiTorbrowser />
                    </span>
            </a>
        </Link>
        <Link href={gitl} passHref>
            <a>
                  <span>
                    <AiFillGithub />
                    </span>
            </a>
        </Link>
     </div>
	</div>
    )
}

