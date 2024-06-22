import { useEffect, useState } from 'react'

const useScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
    setIsDesktop(window.innerWidth > 768)
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
