import { forwardRef, InputHTMLAttributes } from 'react'
import { useId } from 'react'
import BasicError from './BasicError'
import BasicLabel from './BasicLabel'
import BasicInput from './BasicInput'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, required, error, ...rest } = props
  const id = useId()
  return (
    <div>
      <BasicLabel id={id} label={label} required={required} />
      <BasicInput
        id={id}
        ref={ref}
        error={error}
        required={required}
        {...rest}
      />
      <BasicError error={error} />
    </div>
  )
})

export default TextInput
