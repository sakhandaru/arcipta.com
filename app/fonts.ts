import localFont from 'next/font/local'
import { Azeret_Mono } from 'next/font/google'

export const creatoDisplay = localFont({
  src: [
    {
      path: '../public/font/Creato Display Font/CreatoDisplay-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/font/Creato Display Font/CreatoDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/Creato Display Font/CreatoDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/Creato Display Font/CreatoDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/font/Creato Display Font/CreatoDisplay-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-creato',
  display: 'swap',
})

export const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  variable: '--font-azeret',
  display: 'swap',
})
