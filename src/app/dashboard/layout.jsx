"use client";

import "../styles/core.css";

import { useInsertionEffect } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
//   useInsertionEffect(() => {
//   }, []);

  return (
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
