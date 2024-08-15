type Props = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'submit' | 'button'
}

const Button = ({ children, type, onClick }: Props) => {
  return (
    <button
      className={'rounded bg-gray-400 hover:bg-gray-300 disabled:line-through'}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
