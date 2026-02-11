import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { UserProvider } from '@/context/UserContext';
import { Header } from '@/components/shared/Header';
import { RazorpayScript } from '@/components/RazorpayScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arogya  Homeo Consult - Expert Homeopathic Consultations',
  description: 'Book your homeopathic consultation. Pay ₹199 and connect with Dr. Vinay Kumar Singh via WhatsApp for personalized treatment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <UserProvider>
          <RazorpayScript />
          <Header />
          <main className="min-h-screen pt-16 md:pt-20">
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
