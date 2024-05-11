import { HomeTemplate } from '../templates/Home'
import Head from 'next/head'

export default function Home() {

  return(
    <>
    <Head>
      <title>TwistyNetwork</title>
      <script defer src="/ajax/libs/jquery/3.5.1/jquery.min.js" />
      <script defer src="/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" />
      <script defer src="/ajax/libs/izimodal/1.5.1/js/iziModal.min.js" />
      <script defer src="/counter/dist/axios.min.js" />
      <script defer src="/assets/js/other.js" />
    </Head>
    <HomeTemplate />
    </>
  )
}