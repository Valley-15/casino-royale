// app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Poetic, celestial title */}
        <title>Celestial Echoes</title>

        {/* Fallback charset */}
        <meta charSet="utf-8" />

        {/* Ensure proper scaling on mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Standard favicon (SVG for modern browsers) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Fallback .ico for older browsers */}
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />

        {/* Optional: description for SEO / social preview */}
        <meta
          name="description"
          content="If you’ve carried a thought this far, let it rest here—send it drifting among the stars."
        />
      </head>

      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        {/*
          pt-16 to offset your fixed navbar
          container + mx-auto to center & cap the width
          px-4 → sm:px-6 → lg:px-8 for responsive gutters
        */}
        <main className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
