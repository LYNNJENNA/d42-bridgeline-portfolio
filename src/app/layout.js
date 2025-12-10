import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' })

export const metadata = {
    title: 'D42 Bridgeline | Premier Real Estate Development',
    description: 'Portfolio of D42 Bridgeline, showcasing luxury real estate developments.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/foe4lwn.css" />
            </head>
            <body className={`${inter.variable} ${outfit.variable}`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
