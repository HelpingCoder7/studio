"use client";

import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

// export const metadata: Metadata = {
//   title: 'Sudarshan Shrivastava | Portfolio',
//   description: 'The portfolio of Sudarshan Shrivastava, an Application Developer specializing in full-stack development with Flutter, React, Node.js, and more.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <div 
          className="flex min-h-screen flex-col"
        >
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
