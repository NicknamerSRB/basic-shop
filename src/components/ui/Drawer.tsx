import { ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  trigger: ReactNode
  header: ReactNode
  children: ReactNode
  footer: ReactNode
  anchor: 'bottom' | 'right'
  triggerClassName?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
}

const drawerVariants = {
  bottom:
    'fixed bottom-0 left-0 w-full h-1/2 bg-white shadow-lg transform transition-transform duration-300 flex flex-col',
  right:
    'fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 flex flex-col',
}

function Drawer({
  trigger,
  header,
  children,
  footer,
  anchor,
  triggerClassName,
  headerClassName,
  contentClassName,
  footerClassName,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className={triggerClassName} onClick={toggleDrawer}>
        {trigger}
      </div>
      {isOpen && (
        <div className={drawerVariants[anchor]}>
          <div
            className={twMerge(
              'border-b border-gray-300 bg-gray-100 p-4',
              headerClassName,
            )}
          >
            {header}
          </div>
          <div
            className={twMerge('flex-1 overflow-y-auto p-4', contentClassName)}
          >
            {children}
          </div>
          <div
            className={twMerge('border-t border-gray-300 p-4', footerClassName)}
          >
            {footer}
          </div>
        </div>
      )}
    </div>
  )
}

export default Drawer
