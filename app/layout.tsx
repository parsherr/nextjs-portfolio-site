import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import ClientLayout from '@/app/client-layout';

export const metadata: Metadata = {
  metadataBase: new URL('https://parsher.xyz'),
  title: {
    default: 'Rasperon | Backend Developer & Penetration Tester',
    template: '%s | Rasperon',
  },
  description: 'Rasperon - Backend Developer & Penetration Tester. Creating solutions focused on modern web technologies and user experience. Expert in TypeScript, React, and Next.js.',
  keywords: ['Rasperon', 'developer', 'backend', 'penetration tester', 'yazılımcı', 'geliştirici'],
  authors: [{ name: 'Rasperon', url: 'https://parsher.xyz' }],
  creator: 'parsher',
  publisher: 'parsher',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://parsher.xyz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: '#8B5CF6',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: 'https://avatars.githubusercontent.com/u/143193225?v=4',
    shortcut: 'https://avatars.githubusercontent.com/u/143193225?v=4',
    apple: 'https://avatars.githubusercontent.com/u/143193225?v=4',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://Rasperon.xyz',
    title: 'Rasperon | Full-Stack Developer & Content Creator',
    description: 'Rasperon - Full-Stack Web Developer & Content Creator. Creating solutions focused on modern web technologies and user experience. Expert in TypeScript, React, and Next.js.',
    siteName: 'Rasperon',
    images: [
      {
        url: 'https://Rasperon.xyz/meta-banner.png',
        width: 1200,
        height: 630,
        alt: 'Rasperon Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rasperon | Backend Developer & Security penetration tester',
    description: 'Rasperon - Backend Developer & Security penetration tester. Creating solutions focused on modern web technologies and user experience. Expert in TypeScript, React, and Next.js.',
    images: ['https://parsher.xyz/meta-banner.png'],
    creator: '@Parsher',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://parsher.xyz" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}