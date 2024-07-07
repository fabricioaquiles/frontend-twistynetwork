"use client";

import "../../styles/dashboard-core.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="/admin/assets/css/pulsecode.css?ver=3.1.0"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      </head>
      <body className="nk-body bg-lighter npc-general has-sidebar dark-mode">
        <div className="nk-app">
          <div className="nk-main">{children}</div>
        </div>
      </body>
    </html>
  );
}
