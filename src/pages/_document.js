import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
                <link rel="stylesheet" href="/ajax/libs/MaterialDesign-Webfont/6.9.96/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="/ajax/libs/izimodal/1.5.1/css/iziModal.min.css" />
                <link rel="stylesheet" href="/ajax/libs/izitoast/1.4.0/css/iziToast.min.css" />
            </Head>
            <body>
                <Main />
                <script src="/ajax/libs/jquery/3.5.1/jquery.min.js" />
                <script src="/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" />
                <script src="/ajax/libs/izimodal/1.5.1/js/iziModal.min.js" />
                <script src="/counter/dist/axios.min.js" />
                <script src="/assets/js/other.js" />
                <NextScript />
            </body>
        </Html>
    )
}