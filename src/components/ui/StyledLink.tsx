import { ReactNode } from 'react'
import { NavLink, To } from 'react-router-dom'

type Props = {
  to: To
  children?: ReactNode
}

const StyledLink = ({ to, children }: Props) => {
  return (
    <NavLink to={to} className="text-2xl font-bold hover:text-gray-400">
      {children}
    </NavLink>
  )
}

export default StyledLink
