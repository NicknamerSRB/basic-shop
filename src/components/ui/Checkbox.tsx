import { useId } from 'react'

type Props = {
  checked: boolean
  onChange: () => void
}

const Checkbox = ({ checked, onChange }: Props) => {
  const id = useId()
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {checked}
      </label>
    </div>
  )
}

export default Checkbox
