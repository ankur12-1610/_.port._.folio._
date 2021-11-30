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
import { Contributions } from '../components/contributions'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])

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
        <Contributions />
        <div className="mt-6">
        <Footer />
        </div>
    </ThemeProvider>
    </div>
  )
}

export default Home
