import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Weather App',
  description: 'Узнать погоду в городе'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
