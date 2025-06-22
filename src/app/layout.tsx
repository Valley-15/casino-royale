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
        {/* ensure proper scaling on mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
