"use client";

import "../../styles/dashboard-core.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="author" content="Fabricio Aquiles" />
        <title>Twisty Network - Dashboard</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Dashboard panel from Twisty Network"
        />
        <link rel="shortcut icon" href="/assets/img/twisty.PNG" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
      </head>
      <body className="nk-body bg-lighter npc-general has-sidebar dark-mode">
        <div className="nk-app">
          <div className="nk-main">{children}</div>
        </div>
        <script src="/admin/assets/js/bundle.js?ver=3.1.0"></script>
        <script src="/admin/assets/js/scripts.js?ver=3.1.0"></script>
        <script src="/admin/assets/js/charts/gd-default.js?ver=3.1.0"></script>
      </body>
    </html>
  );
}
