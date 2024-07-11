import { useState } from 'react'
import { createPortal } from 'react-dom'
import Button from '../ui/Button'

type Props = {
  triggerLabel: string
  children: React.ReactNode
}

const Dialog = ({ triggerLabel, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{triggerLabel}</Button>
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleClose}
          >
            <div
              className="rounded-lg bg-white p-6 shadow-lg"
              onClick={handleContentClick}
            >
              {children}
              <Button onClick={handleClose}>Close</Button>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

export default Dialog
