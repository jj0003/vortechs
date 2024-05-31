import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import "./fonts.css"; // Add this line
import Navigation from "@/components/navigation";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "VORTECHS",
  description: "TAGLINETAGLINE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrolling>
    <html lang="en">
      <body style={{ fontFamily: 'Satoshi, sans-serif' }} className='bg-[#EEEEEE] p-5'>
        <nav className="sticky top-0 z-50">
          <Navigation />
        </nav>
        {children}
        <Footer/>
      </body>
    </html>
    </SmoothScrolling>
  );
}
