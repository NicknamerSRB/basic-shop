import { useEffect } from 'react'
import ReactDOM from 'react-dom'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Dialog = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dialog = document.getElementById('dialog')
      if (dialog && !dialog.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div id="dialog" className="rounded-lg bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Dialog
