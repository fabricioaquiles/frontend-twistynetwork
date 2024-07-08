"use client";

import "../styles/core.css";

export default function HomeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="author" content="Fabricio Aquiles" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Twisty Network" />
        <link rel="shortcut icon" href="/assets/img/twisty.PNG" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
        <script src="/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" />
        <script src="/ajax/libs/izimodal/1.5.1/js/iziModal.min.js" />
        <script src="/counter/dist/axios.min.js" />
        <script src="/assets/js/other.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
      </head>
      <body>
        <div className="nk-app">
          <div className="nk-main">{children}</div>
        </div>
      </body>
    </html>
  );
}
