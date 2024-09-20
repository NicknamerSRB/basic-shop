type Props = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'submit' | 'button'
  disabled?: boolean
}

const Button = ({ children, ...rest }: Props) => {
  return (
    <button
      className={'rounded bg-gray-400 hover:bg-gray-300 disabled:line-through'}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
