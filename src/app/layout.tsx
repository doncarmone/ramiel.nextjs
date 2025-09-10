import type { Metadata } from 'next';
import './globals.css';
import { titleFont } from '@/config/fonts';
import { Footer, TopMenu } from '@/components';

export const metadata: Metadata = {
  title: 'Before Writing',
  description: 'B4W - Novel planning',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='dracula'>
      <body className={`${titleFont.className} antialiased bg-gray-300`}>
        <TopMenu />
        <main className='min-h-screen '>
          <div className='px-0 sm:px-10'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
