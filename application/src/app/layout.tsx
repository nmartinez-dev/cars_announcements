import type { Metadata } from 'next';
import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anuncios de coches',
  description: 'autos, ventas, coches, automoviles',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <title>Mi Aplicación | Home</title>
        <meta name='description' content='autos, ventas, coches, automoviles' />
        <meta name='keywords' content='autos, ventas, coches, automoviles' />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content='Anuncios de coches' />
        <meta
          property='og:description'
          content='autos, ventas, coches, automoviles'
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
