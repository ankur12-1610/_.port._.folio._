import Head from 'next/head'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import { ThemeProvider } from 'next-themes'
import { Projects } from '../components/projects'

function MyProjects() {

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

export default MyProjects
