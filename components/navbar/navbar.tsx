import React, { useState } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ToggleButton } from '../toggleButton/toggleButton'
import Image from 'next/image'
import logo from "../../images/logo.svg"
import { useRouter } from 'next/router'

const navigation = [
  { name: 'About', link: '/', current: false },
  { name: 'Projects', link: '/myprojects', current: false },
  { name: 'Blog', link: '#', current: false },
  { name: 'Resume', link: 'https://drive.google.com/file/d/1LGnYEZ1SQ5DYcRWO58I5Z1RkdRKqO9Y_/preview' , current: true, },
]

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

export function NavBar() {
  
  const router = useRouter();

  
  return (
      <>
    <Disclosure as="nav" className="sticky top-0 py-2 z-10 bg-white-700 dark:bg-black-700 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 border-b border-gray-250 dark:border-gray-600">
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-700 focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white focus:ring-black ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    className="hidden lg:block h-4 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block lg:pl-20 lg:ml-20 md:ml-20 sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.slice(0,3).map((item) => (
                      <Link href={item.link} key={item.toString()} passHref>
                      <a
                        key={item.name}
                        target="_blank"
                        className={`cursor-pointer ${
                          router.pathname === item.link ? 'bg-blue-600 text-white dark:text-black px-3 py-2 rounded-md text-lg font-RobotoC font-regular text-1xl' : 'text-black-700 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:text-black px-3 py-2 rounded-md text-lg font-RobotoC font-regular text-1xl'
                        }`}
                      >
                        {item.name}
                      </a>
                      </Link>
                    ))}
                    <Link href='/resume'  passHref>
                    <a
                      target="_blank"
                      className='bg-orange text-white dark:text-black px-3 py-2 rounded-md text-lg font-RobotoC font-regular text-1xl' 
                    >
                      Resume
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Toggle Button */}
                  <div>
                    <ToggleButton />
                  </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.slice(0,3).map((item) => (
                <Link href={item.link} key={item.toString()} passHref>
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={`classNames ${
                    router.pathname === item.link  ? 'bg-blue-600 text-white block px-3 py-2 rounded-md text-lg font-RobotoC font-regular ' : 'text-black-700 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-lg font-RobotoC font-regular'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
                </Link>
              ))}
              <Link href='/resume' passHref>
              <Disclosure.Button
                as="a"
                className='bg-orange text-white dark:text-black block px-3 py-2 rounded-md text-lg font-RobotoC font-regular'
              >
                Resume
              </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}
