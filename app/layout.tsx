import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "block",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "My App",
  description: "My App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontMontserrat.variable} flex min-h-dvh w-full flex-col font-montserrat`}>
        <NavBar />
        <main className="flex-1 px-6 pb-6 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
