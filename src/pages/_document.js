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
                <NextScript />
            </body>
        </Html>
    )
}