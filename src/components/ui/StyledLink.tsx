import { ReactNode } from 'react'

type Props = {
  href?: string
  children?: ReactNode
}

const StyledLink = ({ href, children }: Props) => {
  return (
    <a href={href} className="text-2xl font-bold hover:text-gray-400">
      {children}
    </a>
  )
}

export default StyledLink
