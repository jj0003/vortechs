import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import "./fonts.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import ClientWrapper from "@/components/ClientWrapper";

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
        <body>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </body>
      </html>
    </SmoothScrolling>
  );
}
