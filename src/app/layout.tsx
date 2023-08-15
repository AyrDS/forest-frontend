import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Navbar } from '@/components';

import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Fork Forest',
  description:
    'Proyecto ReFi que trabaja con herramientas web3 al servicio de los valores de conservación ambiental y responsabilidad social',
};

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={raleway.className}>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        {/* <meta name='theme-color' content='#ffffff'></meta> */}
      </Head>
      {/* <body>
        <Navbar />
        {children}
      </body> */}
      <body className='flex min-h-[100svh] flex-col'>{children}</body>
    </html>
  );
}
