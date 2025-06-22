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
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        {/* push the page down by navbar height */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
