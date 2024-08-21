"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Navigation from "@/components/navigation";
import Footer from '@/components/footer';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isSpecialPage = pathname.startsWith('/work/');

  return (
    <div 
      style={{ 
        fontFamily: 'Satoshi, sans-serif', 
        backgroundColor: isSpecialPage ? '#171717' : '#EEEEEE',
        padding: '20px'
      }} 
    >
      <nav className="sticky top-0 z-50 flex items-center justify-between">
        <h1 className={`satoshi-bold-italic ${isSpecialPage ? 'text-white' : ''}`}>vortechs</h1>
        <Navigation />
      </nav>
      {children}
      {!isSpecialPage && <Footer />}
    </div>
  );
}
