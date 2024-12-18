import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "./components/ui/navbar";
import { ProdutoProvider } from "./context/ProdutoContext";
import { CarrinhoProvider } from "./context/carrinhoContext";

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
  title: "TFashion",
  description: "Ecommerce fashion",
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
        <nav className="fixed top-0 left-0 w-full transition-all duration-300 ease-in-out bg-opacity-0 backdrop-blur-md z-50">
          <NavBar />
        </nav>
        <ProdutoProvider>
          <CarrinhoProvider>
            <main>{children}</main>
          </CarrinhoProvider>
        </ProdutoProvider>
      </body>
    </html>
  );
}
