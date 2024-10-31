import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AfroTech',
  description: 'AfroTech é uma empresa de software focada em inovação e tecnologia. Ajudamos empresas a crescerem e a se tornarem mais eficientes. Crie seu projeto conosco! 🚀',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}
      style={{
        background: 'linear-gradient(160deg, #080018 15%, #2A0159 100%, #3C037F)',
        WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For Internet Explorer
        overflow: '-webkit-paged-x',
      }}>
{/* For webkit-based browsers (Chrome and Safari) */}
      <style>
        {`::-webkit-scrollbar {
            width: 0px;
            height: 0px;
          }`}
      </style>
        {children}
      </body>
    </html>
  )
}
