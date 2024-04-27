import StyledLink from './ui/StyledLink'
import ShoppingBag from '@/assets/ShoppingBag.svg?react'

interface HeaderProps {
  type: 'cart' | 'noCart'
}

const Header = ({ type }: HeaderProps) => {
  return (
    <header className="fixed inset-x-0 top-0">
      <div className="container mx-auto">
        <nav>
          <ul className="flex items-center justify-center gap-3">
            <li>
              <StyledLink href="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink href="/shop">Store</StyledLink>
            </li>
            <li>
              <StyledLink href="/console">Console</StyledLink>
            </li>
            {type === 'cart' && (
              <ShoppingBag
                href="/cart"
                className="absolute right-6 hover:bg-gray-400"
              />
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
