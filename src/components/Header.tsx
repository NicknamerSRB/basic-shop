import Cart from './Cart/Cart'
import StyledLink from './ui/StyledLink'

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
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/shop">Store</StyledLink>
            </li>
            <li>
              <StyledLink to="/console">Console</StyledLink>
            </li>
            {type === 'cart' && <Cart />}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
