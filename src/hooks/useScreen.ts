import { useEffect, useState } from 'react'

const breakpoints = {
  lg: 1024,
  sm: 768,
}

const useScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoints.lg)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > breakpoints.lg)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= breakpoints.sm)
    setIsDesktop(window.innerWidth > breakpoints.sm)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile, isDesktop }
}

export default useScreen
