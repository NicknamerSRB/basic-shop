import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  variant?: 'lg' | 'md' | 'sm'
}

const paragraph = ({ children, variant = 'md' }: Props) => {
  const className = twMerge(
    'text-sm',
    variant === 'lg' && 'lg:text-lg font-bold',
    variant === 'sm' && 'sm:text-xs font bold',
  )

  return <p className={className}>{children}</p>
}

export default paragraph
