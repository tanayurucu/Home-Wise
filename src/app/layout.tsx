import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';

import './globals.css'
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import SearchModal from './components/modals/SearchModal';

export const metadata = {
  title: 'HomeWise',
  description: 'HomeWise',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
      </body>
    </html>
  )
}