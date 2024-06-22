import { ReactNode, useState } from 'react'
import useScreen from '@/hooks/useScreen'

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
  const { isMobile } = useScreen()

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const drawerClass =
    anchor === 'bottom' || isMobile
      ? 'fixed bottom-0 left-0 w-full h-1/2 bg-white shadow-lg transform transition-transform duration-300 flex flex-col'
      : 'fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 flex flex-col'

  return (
    <div>
      <div className={triggerClassName} onClick={toggleDrawer}>
        {trigger}
      </div>
      {isOpen && (
        <div className={drawerClass}>
          <div
            className={`${headerClassName} border-b border-gray-300 bg-gray-100 p-4`}
          >
            {header}
          </div>
          <div className={`${contentClassName} flex-1 overflow-y-auto p-4`}>
            {children}
          </div>
          <div className={`${footerClassName} border-t border-gray-300 p-4`}>
            {footer}
          </div>
        </div>
      )}
    </div>
  )
}

export default Drawer
