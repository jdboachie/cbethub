import type { Metadata } from 'next'
import { inter } from '@/lib/fonts'
import './globals.css'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'CBET Hub',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body
      className={`${inter.className} flex flex-col antialiased bg-[url('/grid.svg')] dark:bg-[rgb(10,10,11)]
      `}>
        <div
          className='fixed h-screen w-screen blur-3xl z-[-1] opacity-[0.4] bg-gradient-to-tr from-rose-400/20 via-fuchsia-500/20 to-indigo-500/20'
        />
        <div className='flex flex-col items-center justify-center w-full'>
          <NavBar />
          <main
            className='w-[90%] max-w-6xl mt-[7em] mb-6 space-y-5'
          >
          {children}
          </main>
        </div>
      </body>
    </html>
  )
}
