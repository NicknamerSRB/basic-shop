type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  id: string
}

function BasicInput({ value, onChange, placeholder, id }: Props) {
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded border border-gray-300 p-2"
    />
  )
}

export default BasicInput
