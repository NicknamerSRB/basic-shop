import { forwardRef, InputHTMLAttributes } from 'react'
import { useId } from 'react'
import BasicError from './BasicError'
import BasicLabel from './BasicLabel'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, required, error, ...rest } = props
  const id = useId()
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        ref={ref}
        className={`mt-1 block rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${error ? 'border-red-500' : ''}`}
        required={required}
        {...rest}
      />
      <BasicLabel id={id} label={label} required={required} />
      <BasicError error={error} />
    </div>
  )
})

export default Checkbox
