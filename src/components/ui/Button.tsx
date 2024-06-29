type Props = {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <button
      className={'rounded bg-gray-400 hover:bg-gray-300  disabled:line-through'}
    >
      {children}
    </button>
  )
}

export default Button
