import type { Metadata } from 'next';
import './globals.css';
import { titleFont } from '@/config/fonts';

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
        {children}
      </body>
    </html>
  );
}
