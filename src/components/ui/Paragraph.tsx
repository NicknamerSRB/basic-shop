import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  variant?: 'lg' | 'md' | 'sm'
}

const variantStyles = {
  lg: 'lg:text-lg font-bold',
  md: 'text-sm',
  sm: 'sm:text-xs font bold',
}

const paragraph = ({ children, variant = 'md' }: Props) => {
  const className = twMerge(variantStyles[variant])

  return <p className={className}>{children}</p>
}

export default paragraph
