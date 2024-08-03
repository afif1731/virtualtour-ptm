import { AppProps } from 'next/app'

import '@/styles/index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
