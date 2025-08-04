// @ts-nocheck

import './index.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/footer';
import { ILayout } from '@/interfaces/ILayout';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import { Toaster } from 'sonner';
import Navbar from '@/components/Home/Navbar';
import Script from 'next/script'; 
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EVA | الأمن والحماية | قريباً',
  description: 'EVA متخصصة في حلول الأمن المتقدمة. موقعنا قيد الصيانة حالياً.',
};

export default async function RootLayout({ children }: Readonly<ILayout>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZDKDP7V97P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZDKDP7V97P');
          `}
        </Script>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AnalyticsProvider>
          <Navbar />
          <Toaster position="top-right" richColors />
          <main className="flex-grow">{children}</main>
          <WhatsAppButton />
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
