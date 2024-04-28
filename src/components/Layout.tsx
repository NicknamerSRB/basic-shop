import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  type: 'cart' | 'noCart'
}

function Layout({ type }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-500">
      <Header type={type} />
      <main className="mt-8 grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
