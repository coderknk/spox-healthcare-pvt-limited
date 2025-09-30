import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'react-hot-toast';
import { SiteLayout } from '@/components/layout/site-layout';
import './globals.css';

// Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

// Metadata
export const metadata: Metadata = {
  title: {
    default: 'Spox Healthcare - Advanced Medical Equipment Solutions',
    template: '%s | Spox Healthcare',
  },
  description:
    'Spox Healthcare is a leading manufacturer of advanced medical imaging equipment including portable X-ray machines, digital radiography systems, and AI-powered diagnostic solutions.',
  keywords: [
    'medical equipment',
    'portable x-ray',
    'digital radiography',
    'healthcare technology',
    'medical imaging',
    'x-ray machines',
    'medical devices',
    'healthcare solutions',
    'Spox Healthcare',
  ],
  authors: [{ name: 'Spox Healthcare Private Limited' }],
  creator: 'Spox Healthcare',
  publisher: 'Spox Healthcare',
  metadataBase: new URL('https://spoxhealthcare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://spoxhealthcare.com',
    siteName: 'Spox Healthcare',
    title: 'Spox Healthcare - Advanced Medical Equipment Solutions',
    description:
      'Leading manufacturer of portable X-ray machines, digital radiography systems, and AI-powered diagnostic equipment.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spox Healthcare - Advanced Medical Equipment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spox Healthcare - Advanced Medical Equipment Solutions',
    description:
      'Leading manufacturer of portable X-ray machines, digital radiography systems, and AI-powered diagnostic equipment.',
    images: ['/images/og-image.jpg'],
    creator: '@spoxhealthcare',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteLayout>
            {children}
          </SiteLayout>
          <Toaster position="top-center" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
