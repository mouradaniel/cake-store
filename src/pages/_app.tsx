import type { AppProps } from 'next/app'
import { Lato } from '@next/font/google'
import React from 'react'
import { globalStyles } from '../styles/global'

const lato = Lato({
  weight: ['400', '700'],
  style: ['normal'],
  subsets:['latin']
})

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <header>
        <h1>Cake Store</h1>
      </header>

      <Component {...pageProps} />
    </main>
  )
}
