import { ToastContext } from '@/contexts/ToastContext'
import { useContext } from 'react'

export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error(
      'useToastContext must be used within a ToastContextProvider',
    )
  }
  return context
}
