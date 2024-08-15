import { forwardRef, TextareaHTMLAttributes } from 'react'
import { useId } from 'react'
import BasicError from './BasicError'
import BasicLabel from './BasicLabel'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { label, required, error, ...rest } = props
  const id = useId()
  return (
    <div>
      <BasicLabel id={id} label={label} required={required} />
      <textarea
        id={id}
        ref={ref}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${error ? 'border-red-500' : ''}`}
        required={required}
        {...rest}
      />
      <BasicError error={error} />
    </div>
  )
})

export default TextArea
