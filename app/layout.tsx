import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import ScrollToTop from '@/components/features/ScrollToTop';
import { SITE_CONFIG } from '@/data/content';
import FloatingWhatsApp from '@/components/features/FloatingWhatsapp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Jasa Skripsi & Tesis Terpercaya | LulusBareng.com',
    template: '%s | LulusBareng.com',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Jasa Skripsi',
    'Jasa Tesis',
    'Bimbingan Skripsi',
    'Joki Skripsi Aman',
    'LulusBareng',
  ],
  authors: [{ name: 'LulusBareng Team' }],
  creator: 'LulusBareng.com',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_CONFIG.domain,
    title: 'Jasa Skripsi & Tesis Terpercaya | LulusBareng.com',
    description: SITE_CONFIG.description,
    siteName: 'LulusBareng.com',
    images: [
      {
        url: '/og-image.jpg', // Pastikan buat file ini di public
        width: 1200,
        height: 630,
        alt: 'LulusBareng.com',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'LulusBareng.com',
    image: `${SITE_CONFIG.domain}/logo.png`,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    priceRange: '$$',
    telephone: SITE_CONFIG.whatsapp,
  };

  return (
    <html
      lang='id'
      className='scroll-smooth'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <FloatingWhatsApp />
        <ScrollToTop />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
