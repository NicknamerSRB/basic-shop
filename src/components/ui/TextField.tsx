import BasicInput from './BasicInput'
import BasicLabel from './BasicLabel'

type Props = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const TextField = ({ label, value, onChange, placeholder }: Props) => {
  return (
    <div className="mb-4">
      <BasicLabel>{label}</BasicLabel>
      <BasicInput value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default TextField
