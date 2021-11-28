import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Cintro } from '../components/cintro'
import { About } from '../components/about'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import { ThemeProvider } from 'next-themes'
import { Projects } from '../components/projects'

export default function MyProjects() {
  return (
    <div >
    <ThemeProvider attribute="class" >
      <Head>
        <title>MyProjects</title>
        <meta name="description" content="itsankur.tech" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Projects />
        <Footer />
    </ThemeProvider>
    </div>
  )
}

