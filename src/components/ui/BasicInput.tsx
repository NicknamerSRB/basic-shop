import { InputHTMLAttributes, forwardRef } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  error?: string
}

const BasicInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { id, error, ...rest } = props
  return (
    <input
      id={id}
      ref={ref}
      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${error ? 'border-red-500' : ''}`}
      {...rest}
    />
  )
})

export default BasicInput
