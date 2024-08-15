import { forwardRef, SelectHTMLAttributes } from 'react'
import { useId } from 'react'
import BasicError from './BasicError'
import BasicLabel from './BasicLabel'

type Option = {
  value: string
  label: string
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  options: Option[]
  error?: string
}

const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { label, required, error, options, ...rest } = props
  const id = useId()
  return (
    <div>
      <BasicLabel id={id} label={label} required={required} />
      <select
        id={id}
        ref={ref}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${error ? 'border-red-500' : ''}`}
        required={required}
        {...rest}
      >
        <option value=""></option>
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      <BasicError error={error} />
    </div>
  )
})

export default Select
