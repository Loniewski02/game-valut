import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Footer from "./components/layout/Footer";
import NavBar from "./components/ui/navbar/NavBar";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
        <main id="main" className="flex-1 bg-LightGray p-6 md:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
