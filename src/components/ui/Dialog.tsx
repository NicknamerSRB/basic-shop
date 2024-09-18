import { useState } from 'react'
import { createPortal } from 'react-dom'
import Button from '../ui/Button'

type Props = {
  triggerLabel: string
  children: React.ReactNode
  onOpen?: () => void
  onClose?: () => void
}

const Dialog = ({ triggerLabel, children, onOpen, onClose }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    if (onOpen) {
      onOpen()
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    if (onClose) {
      onClose()
    }
  }

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <>
      <Button onClick={handleOpen}>{triggerLabel}</Button>
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
