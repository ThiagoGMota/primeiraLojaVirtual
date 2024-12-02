import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "./components/ui/navbar";
import { ProdutoProvider } from "./providers/ProdutoProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProdutoProvider>
          <nav className="fixed top-0 left-0 w-full transition-all duration-300 ease-in-out bg-opacity-0 backdrop-blur-md z-50">
            <NavBar />
          </nav>
          <main>          
            {children}
          </main>
        </ProdutoProvider>
      </body>
    </html>
  );
}
