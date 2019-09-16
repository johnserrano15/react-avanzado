import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // JSON.parse convierte 'true' o 'false' en true o false
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      // JSON.stringify convierte un object en string es decir 'true' en true
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
