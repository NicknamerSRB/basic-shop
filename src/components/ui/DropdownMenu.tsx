import { useState } from 'react'
import Button from './Button'

type Props = {
  children: React.ReactNode
  trigger: string
}

const DropdownMenu = ({ children, trigger }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div>
        <Button onClick={() => setIsOpen(!isOpen)}>{trigger}</Button>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
