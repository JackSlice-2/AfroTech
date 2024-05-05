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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
