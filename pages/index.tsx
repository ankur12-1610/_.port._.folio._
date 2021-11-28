import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Cintro } from '../components/cintro'
import { About } from '../components/about'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import { ThemeProvider } from 'next-themes'

const Home: NextPage = () => {


  return (
    <div>
    <ThemeProvider attribute="class" enableSystem={false}>
      <Head>
        <title>Ankur Patil</title>
        <meta name="description" content="itsankur.tech" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Cintro />
        <About />
        <div className="-mt-20">
        <Footer />
        </div>
    </ThemeProvider>
    </div>
  )
}

export default Home
