"use client";

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
        <link
          id="skin-default"
          rel="stylesheet"
          href="/admin/assets/css/theme.css?ver=3.1.0"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
