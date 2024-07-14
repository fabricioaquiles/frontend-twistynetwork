"use client";

import { queryClient } from "@/services/queryClient";
import "@/styles/core.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

export default function HomeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html>
      <head>
        <meta name="author" content="Fabricio Aquiles" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Twisty Network</title>
        <meta name="description" content="Twisty Network" />
        <link rel="shortcut icon" href="/assets/img/twisty.PNG" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="https://media.discordapp.net/attachments/896083092656234506/1124908490805219419/HaunzMC_sem_fundo.png?width=566&height=566"
        />
        <link
          rel="stylesheet"
          href="/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="/ajax/libs/MaterialDesign-Webfont/6.9.96/css/materialdesignicons.min.css"
        />
        <link
          rel="stylesheet"
          href="/ajax/libs/izimodal/1.5.1/css/iziModal.min.css"
        />
        <link
          rel="stylesheet"
          href="/ajax/libs/izitoast/1.4.0/css/iziToast.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <SkeletonTheme baseColor="#13131d" highlightColor="#13131d">
            <div className="nk-app">
              <div className="nk-main">{children}</div>
            </div>
            <Toaster richColors position="top-right" />
          </SkeletonTheme>
        </QueryClientProvider>
        <script src="/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script src="/counter/dist/axios.min.js" />
        <script src="/assets/js/other.js" />
      </body>
    </html>
  );
}
