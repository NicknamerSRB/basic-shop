const ls = {
  get: <T>(lsKey: string): T | null => {
    try {
      const storedValue = localStorage.getItem(lsKey)
      return storedValue ? JSON.parse(storedValue) : null
    } catch (error) {
      console.error('Error parsing local storage value for key:', lsKey, error)
      return null
    }
  },

  set: <T>(lsKey: string, value: T): void => {
    try {
      const valueString = JSON.stringify(value)
      localStorage.setItem(lsKey, valueString)
    } catch (error) {
      console.error('Error setting local storage value for key:', lsKey, error)
    }
  },

  remove: (lsKey: string): void => {
    try {
      localStorage.removeItem(lsKey)
    } catch (error) {
      console.error('Error removing local storage value for key:', lsKey, error)
    }
  },
}

export default ls
