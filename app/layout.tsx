import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "../components/shared/navigation/Navigation";
import Footer from "../components/shared/layout/Footer";
import AuthProvider from "../components/_providers/auth-provider";
import MessagesProvider from "../components/_providers/MessagesContext";
import Message from "../components/shared/ui/Message";

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
        <AuthProvider>
          <MessagesProvider>
            <Navigation />
            <main id="main" className="relative flex-1 bg-LightGray p-6 md:p-8">
              {children}
              <Message />
            </main>
            <Footer />
          </MessagesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
