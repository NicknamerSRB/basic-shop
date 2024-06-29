import { ReactNode, useState } from 'react'
import useScreen from '@/hooks/useScreen'
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
  headerVariant?: 'headerD'
  contentVariant?: 'contentD'
  footerVariant?: 'footerD'
}

const variantStyles = {
  headerD: 'border-b border-gray-300 bg-gray-100 p-4',
  contentD: 'flex-1 overflow-y-auto p-4',
  footerD: 'border-t border-gray-300 p-4',
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
  headerVariant = 'headerD',
  contentVariant = 'contentD',
  footerVariant = 'footerD',
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useScreen()

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const headerStyle = twMerge(variantStyles[headerVariant], headerClassName)
  const contentStyle = twMerge(variantStyles[contentVariant], contentClassName)
  const footerStyle = twMerge(variantStyles[footerVariant], footerClassName)

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
          <div className={headerStyle}>{header}</div>
          <div className={contentStyle}>{children}</div>
          <div className={footerStyle}>{footer}</div>
        </div>
      )}
    </div>
  )
}

export default Drawer
