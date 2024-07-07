"use client";

import "../styles/core.css";

export default function HomeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html>
      <head>
        <script src="/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" />
        <script src="/ajax/libs/izimodal/1.5.1/js/iziModal.min.js" />
        <script src="/counter/dist/axios.min.js" />
        <script src="/assets/js/other.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      </head>
      <body>
        <div className="nk-app">
          <div className="nk-main">{children}</div>
        </div>
      </body>
    </html>
  );
}
