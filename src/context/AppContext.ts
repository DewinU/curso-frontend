import React from 'react'

interface AppContextInterface {
  state?: { cart: any[] }
  addToCart?: (payload: any) => void
  removeFromCart?: (payload: any) => void
}

const AppContext = React.createContext<AppContextInterface>({})

export default AppContext
