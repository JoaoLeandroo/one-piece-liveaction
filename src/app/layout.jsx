import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: [
  '300',
  '500',
  '900'
] })

export const metadata = {
  title: 'One Piece - LiveAction',
  description: 'Venha descobrir as maravilhas do LiveAction de One Piece!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} bg-body-color max-w-padrao-large w-full min-h-screen`}>{children}</body>
    </html>
  )
}
