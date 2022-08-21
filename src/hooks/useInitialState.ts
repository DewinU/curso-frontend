import { useState } from 'react'

const initialState: { cart: any[] } = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload: any) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    })
  }

  const removeFromCart = (payload: number) => {
    setState({
      ...state,
      cart: state.cart.filter((item: any, index: number) => index !== payload),
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
  }
}

export default useInitialState
