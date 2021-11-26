import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/navbar'
import { ProgressBar } from '../components/progressBar'
import { Footer } from '../components/footer'
import { ThemeProvider } from 'next-themes'
import { Cintro } from '../components/cintro'
import { About } from '../components/about'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
      <ProgressBar />
      <NavBar />
      <Cintro />
      <About />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
