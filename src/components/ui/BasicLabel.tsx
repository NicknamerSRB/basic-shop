type Props = {
  children: React.ReactNode
  htmlFor: string
}

const BasicLabel = ({ children, htmlFor }: Props) => {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-bold">
      {children}
    </label>
  )
}

export default BasicLabel
