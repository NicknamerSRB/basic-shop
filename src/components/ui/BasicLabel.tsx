type Props = {
  id?: string
  label: string
  required?: boolean
}

const BasicLabel = ({ id, label, required }: Props) => {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  )
}

export default BasicLabel
