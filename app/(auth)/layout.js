import{Inter} from "next/font/google"
import "../globals.css"
export const metadata ={
    title: 'Auth',
    description: 'Next 14 Social app'
}
const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
    return(
        <html lang="en">
            <body className={`${inter.className} bg-purple-1`}>{children}</body>
        </html>
    )
}