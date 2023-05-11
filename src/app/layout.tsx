import { ReactNode } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'
import { Header } from '@/components/Header'
import { Analytics } from '@/components/Analytics'
import Head from 'next/head'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Paniagua Corretora de seguros',
  description: 'Seu seguro na palma da sua mão!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta
          name="keywords"
          content="Seguro auto,
          Seguro automóvel,
          Cotação seguro auto,
          Preço seguro auto,
          Comprar seguro auto,
          Melhor seguro auto,
          Seguro auto online,
          Seguro veicular,
          Cobertura seguro auto,
          Seguradora automóvel,
          Seguro carro,
          Seguro automotivo,
          Proteção veicular,
          Assistência 24 horas,
          Franquia de seguro auto,
          Seguro contra roubo e furto,
          Seguro para terceiros,
          Seguro de colisão,
          Seguro de responsabilidade civil,
          Seguro de danos próprios"
        />
      </Head>
      <body className={roboto.className}>
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  )
}
