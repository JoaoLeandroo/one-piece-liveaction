import './globals.css'
import { Roboto } from 'next/font/google'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'

const roboto = Roboto({ subsets: ['latin'], weight: [
  '300',
  '500',
  '900'
] })

export const metadata = {
  title: 'One Piece - LiveAction',
  description: 'Venha descobrir as maravilhas do LiveAction de One Piece',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} bg-body-color max-w-[1440px] w-full m-auto relative`}>
        <ChakraProvider>
          <Header/>  
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  )
}
