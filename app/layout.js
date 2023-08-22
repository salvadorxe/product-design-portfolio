import '../styles/globals.css';
import Nav from "@components/Nav"

export const metadata = {
  title: 'Salvador Xe - Product Designer',
  description: 'Product Design Portolfio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
