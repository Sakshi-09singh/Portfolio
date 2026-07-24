import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sakshi Singh | Frontend Developer Portfolio',
  description:
    'Personal Portfolio website of Sakshi Singh - Frontend Developer Intern at MetaUpSpace, MCA student at KIET Ghaziabad.',
  keywords: [
    'Sakshi Singh',
    'Portfolio',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'Web Developer',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        {children} <Toaster position='top-right' richColors closeButton />
      </body>
    </html>
  )
}
