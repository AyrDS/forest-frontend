import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Raleway } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from '@/components/Navbar';

import '../globals.css';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fork Forest',
  description:
    'Proyecto ReFi que trabaja con herramientas web3 al servicio de los valores de conservación ambiental y responsabilidad social',
};

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export const generateStaticParams = () => {
  return [{ locale: 'es' }, { locale: 'en' }];
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={raleway.className}>
      <body className='flex min-h-[100svh] flex-col'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
