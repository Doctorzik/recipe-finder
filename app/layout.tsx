import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const nunito_sans = Nunito_Sans({
  variable: "--font-nunito_sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe finder website",
  description: "A recipe finder website built by Ezekiel."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans.variable} ${nunito.variable} antialiased  bg-[#E0E6E3]`}
      >

        <NavBar />
        <div className="grid grid-cols-1 px-4 md:px-8 lg:px-24 gap-8 ">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
