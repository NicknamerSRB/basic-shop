import { CartItemType } from '@/contexts/CartContext'

type LSKeyValueMap = {
  'cart-items': CartItemType[]
}

type LSKey = keyof LSKeyValueMap

type LSValue<T extends LSKey> = LSKeyValueMap[T]

const ls = {
  get: <T extends LSKey>(lsKey: T): LSValue<T> | null => {
    try {
      const storedValue = localStorage.getItem(lsKey)
      return storedValue ? JSON.parse(storedValue) : null
    } catch (error) {
      console.error('Error parsing local storage value for key:', lsKey, error)
      return null
    }
  },

  set: <T extends LSKey>(lsKey: T, value: LSValue<T>): void => {
    try {
      const valueString = JSON.stringify(value)
      localStorage.setItem(lsKey, valueString)
    } catch (error) {
      console.error('Error setting local storage value for key:', lsKey, error)
    }
  },

  remove: (lsKey: LSKey): void => {
    try {
      localStorage.removeItem(lsKey)
    } catch (error) {
      console.error('Error removing local storage value for key:', lsKey, error)
    }
  },
}

export default ls
