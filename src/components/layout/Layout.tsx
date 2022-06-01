import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col bg-black text-gray-100'>
      <Header />
      <main className='layout flex grow'>{children}</main>
      <Footer />
    </div>
  );
}
