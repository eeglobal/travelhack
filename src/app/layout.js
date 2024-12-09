import localFont from "next/font/local";
import { poppins, montserrat } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/components/header";
import Footer from "./ui/components/footer";
import { Metadata } from 'next';
 
export const metadata = {
  title: {
    template: '%s | Travel Hack',
    default: 'Travel Hack',
  },
  description: 'Unlock Exclusive Travel Deals and Save Up to 86% on Your Next Adventure!',
};


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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header />
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
