import React from 'react'

interface AppContextInterface {
  state?: { cart: any[]; showOrders: boolean; showOptions: boolean }
  addToCart?: (payload: any) => void
  removeFromCart?: (payload: any) => void
  toggleOrders?: () => void
  toggleOptions?: () => void
}

const AppContext = React.createContext<AppContextInterface>({})

export default AppContext
