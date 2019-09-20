import React, { createContext, useState } from 'react'
// const Context = createContext()

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'))

  const value = {
    isAuth,
    activateAuth: token => {
      window.sessionStorage.setItem('token', token)
      setIsAuth(true)
    },
    removeAuth: () => {
      window.sessionStorage.removeItem('token')
      setIsAuth(false)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default { Provider, Consumer: Context.Consumer }
