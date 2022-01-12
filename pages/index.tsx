import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Cintro } from '../components/cintro'
import { About } from '../components/about'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import { Skills } from '../components/skills'
import { ProgressBar } from '../components/progressBar'
import { Contributions } from '../components/contributions'


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Ankur Patil</title>
        <meta name="google-site-verification" content="Owmn_tza4uRqwBfUUA4F-wHh9t-QWjSewv2UN_ob6gY" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProgressBar/>
        <NavBar />
        <Cintro />
        <About />
        <Skills />
        <Contributions />
        <div className="mt-6 mb-10">
        <Footer/>
        </div>
    </div>
  );
}

export async function  getServerSideProps() {
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    props: {},
  };
}

export default Home
