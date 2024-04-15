import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Weather App',
  description: 'Узнать погоду в городе',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`bg-main-color flex flex-col min-h-dvh overflow-x-hidden ${inter.className}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
