import React from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ToggleButton } from '../toggleButton/toggleButton'
import Image from 'next/image'
import logo from "../../images/logo.svg"

const navigation = [
  { name: 'About', href: '/', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Resume', href: 'https://drive.google.com/file/d/1LGnYEZ1SQ5DYcRWO58I5Z1RkdRKqO9Y_/view' , current: true, },
]

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

export function NavBar() {

  return (
      <>
    <Disclosure as="nav" className="sticky top-0 py-2 z-10 bg-white-700 dark:bg-black-700 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 border-b border-gray-250 dark:border-gray-600">
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name} replace>
                      <a
                        target="_blank"
                        className={classNames(
                          item.current ? 'bg-blue-600 text-white' : 'text-black-700 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:text-black',
                          'px-3 py-2 rounded-md text-lg font-RobotoC font-regular text-1xl'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      </Link>
                    ))}
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
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-600 text-white' : 'text-black-700 hover:bg-blue-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-lg font-RobotoC font-regular'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}
