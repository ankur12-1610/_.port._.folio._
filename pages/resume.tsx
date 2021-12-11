import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { ThemeProvider } from 'next-themes'
import Iframe from 'react-iframe'

function Resume() {
  return (
    <div >
    <ThemeProvider attribute="class" >
      <Head>
        <title>Resume</title>
        <meta name="description" content="itsankur.tech" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Iframe url="https://drive.google.com/file/d/1LGnYEZ1SQ5DYcRWO58I5Z1RkdRKqO9Y_/preview?usp=sharing"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "25px"}}/>
    </ThemeProvider>
    </div>
  )
}

export default Resume
