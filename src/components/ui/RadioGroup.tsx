import { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import { useId } from 'react'
import BasicError from './BasicError'
import BasicLabel from './BasicLabel'

type Option = {
  value: string
  label: string
}

type Props = {
  label: string
  name: string
  required?: boolean
  error?: string
  options: Option[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioGroup = forwardRef(
  (
    { label, name, required, error, options, onChange }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId()
    return (
      <div>
        <BasicLabel label={label} required={required} />
        <div>
          {options.map((option, i) => {
            return (
              <label key={option.value} className="ml-2" htmlFor={`${id}-${i}`}>
                <input
                  type="radio"
                  id={`${id}-${i}`}
                  className={error ? 'border-red-500' : ''}
                  name={name}
                  value={option.value}
                  onChange={onChange}
                  required={required}
                  ref={ref}
                />
                <span className="">{option.label}</span>
              </label>
            )
          })}
        </div>
        <BasicError error={error} />
      </div>
    )
  },
)

export default RadioGroup
