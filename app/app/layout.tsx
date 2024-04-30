import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carter Bassett',
  description: 'Carter Bassett\'s Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Carter Bassett's Personal Website" />
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
