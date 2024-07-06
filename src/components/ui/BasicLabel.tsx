type Props = { children: React.ReactNode }

const BasicLabel = ({ children }: Props) => {
  return <label className="mb-2 block text-sm font-bold">{children}</label>
}

export default BasicLabel
