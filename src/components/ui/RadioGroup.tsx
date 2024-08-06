import { ChangeEvent } from 'react'
import { useId } from 'react'
import BasicError from './BasicError'
import BasicLabel from './BasicLabel'

type Props = {
  label: string
  name: string
  required?: boolean
  error?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioGroup = ({ label, name, required, error, onChange }: Props) => {
  const id = useId()
  return (
    <div>
      <BasicLabel id={id} label={label} required={required} />
      <div>
        <div>
          <input
            type="radio"
            id={`${id}`}
            name={name}
            onChange={onChange}
            required={required}
            className={error ? 'border-red-500' : ''}
          />
          <label htmlFor={`${id}`} className="ml-2"></label>
        </div>
      </div>
      <BasicError error={error} />
    </div>
  )
}

export default RadioGroup
