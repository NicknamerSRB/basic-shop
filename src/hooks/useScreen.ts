import { useEffect, useState } from 'react'

const breakpoints = {
  lg: 1024,
}

const useScreen = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= breakpoints.lg)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile, isDesktop: !isMobile }
}

export default useScreen
