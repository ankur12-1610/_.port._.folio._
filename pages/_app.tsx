import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from 'react-scroll-to-top'
import up from '../images/up.webp'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {

  return (
   <ThemeProvider  attribute="class">
    <ScrollToTop top={400} smooth component={<Image src={up} alt="up" className="bg-transparent" />}/>
     <Component {...pageProps} />
   </ThemeProvider>
  )
}

export default MyApp
