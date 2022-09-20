import { useState } from 'react'

const initialState: { cart: any[]; showOrders: boolean; showOptions: boolean } =
  {
    cart: [],
    showOrders: false,
    showOptions: false,
  }

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload: any) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    })
  }

  const removeFromCart = (payload: any) => {
    setState({
      ...state,
      cart: state.cart.filter((item: any) => item !== payload),
    })
  }

  const toggleOrders = () => {
    setState({
      ...state,
      showOrders: !state.showOrders,
      showOptions: false,
    })
  }

  const toggleOptions = () => {
    setState({
      ...state,
      showOptions: !state.showOptions,
      showOrders: false,
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrders,
    toggleOptions,
  }
}

export default useInitialState
