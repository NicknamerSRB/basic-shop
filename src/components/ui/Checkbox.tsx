import { useId } from 'react'

type Props = {
  checked?: boolean
  defaultChecked?: boolean
  onChange: () => void
  label?: string
}

const Checkbox = ({ label, ...props }: Props) => {
  const id = useId()
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        {...props}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  )
}

export default Checkbox
