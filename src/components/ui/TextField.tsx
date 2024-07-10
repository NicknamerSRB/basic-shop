import { useId } from 'react'
import BasicInput from './BasicInput'
import BasicLabel from './BasicLabel'

type Props = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const TextField = ({ label, value, onChange, placeholder }: Props) => {
  const id = useId()
  return (
    <div className="mb-4">
      <BasicLabel htmlFor={id}>{label}</BasicLabel>
      <BasicInput
        id={label && id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField
