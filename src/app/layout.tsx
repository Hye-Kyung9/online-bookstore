import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BookStore',
  description: 'online bookstore_assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
