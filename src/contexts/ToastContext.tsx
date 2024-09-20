import { createContext, useState, ReactNode } from 'react'

export type Toast = {
  id: string
  message: string
  type: 'success' | 'error'
}

type ToastContextType = {
  addToast: (message: string, type: 'success' | 'error') => void
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
)

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, type: 'success' | 'error') => {
    const newToast: Toast = {
      id: Math.random().toString(36).substr(2, 9),
      message,
      type,
    }
    setToasts((prev) => [...prev, newToast])
  }

  const deleteToastById = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-5 right-5 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded p-4 text-white shadow-lg ${
              toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } animate-fadeOut`}
            onAnimationEnd={() => deleteToastById(toast.id)}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
