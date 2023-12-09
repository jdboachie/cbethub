import { Inter, Lato, Oswald, Silkscreen } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const oswald = Oswald({ subsets: ['latin'] })
export const silkscreen = Silkscreen({
    weight: ['400', '700'],
    subsets: ['latin'],
})
export const lato = Lato({ weight: ['400', '900'],subsets: ['latin'] })