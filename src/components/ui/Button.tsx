import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  variant?: 'aveilable' | 'unaveilable'
}

const Button = ({ children, variant = 'aveilable' }: Props) => {
  const className = twMerge(
    'rounded bg-gray-400 hover:bg-gray-300',
    variant === 'unaveilable' &&
      'rounded bg-gray-400 hover:bg-gray-300 line-through',
  )
  return <button className={className}>{children}</button>
}

export default Button
