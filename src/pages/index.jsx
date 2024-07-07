import { HomeTemplate } from '../templates/Home'
import Head from 'next/head'

export default function Home() {

  return(
    <>
    <Head>
      <title>TwistyNetwork</title>
    </Head>
    <HomeTemplate />
    </>
  )
}