import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Cintro } from '../components/cintro'
import { About } from '../components/about'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import { Skills } from '../components/skills'
import { ThemeProvider } from 'next-themes'
import { ProgressBar } from '../components/progressBar'
import "intersection-observer"

const Home: NextPage = () => {

  async function loadPolyfills() {
    if (typeof window.IntersectionObserver === "undefined") {
      await import("intersection-observer");
    }
  }

  return (
    <div>
    <ThemeProvider attribute="class" enableSystem={false}>
      <Head>
        <title>Ankur Patil</title>
        <meta name="description" content="itsankur.tech" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProgressBar/>
        <NavBar />
        <Cintro />
        <About />
        <Skills />
        <div className="mt-6">
        <Footer />
        </div>
    </ThemeProvider>
    </div>
  )
}

export default Home
