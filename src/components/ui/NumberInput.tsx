import { forwardRef, InputHTMLAttributes } from 'react'
import { useId } from 'react'
import BasicError from './BasicError'
import BasicLabel from './BasicLabel'
import BasicInput from './BasicInput'

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const { label, required, error, ...rest } = props
    const id = useId()
    return (
      <div>
        <BasicLabel id={id} label={label} required={required} />
        <BasicInput
          id={id}
          ref={ref}
          type="number"
          error={error}
          required={required}
          {...rest}
        />
        <BasicError error={error} />
      </div>
    )
  },
)

export default NumberInput
