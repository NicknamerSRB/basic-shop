type Props = {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className={'rounded bg-gray-400 hover:bg-gray-300 disabled:line-through'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
