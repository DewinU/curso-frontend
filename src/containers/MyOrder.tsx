import React, { useContext } from 'react'
import OrderItem from '@components/OrderItem'
import '@styles/MyOrder.scss'
import AppContext from '@context/AppContext'
import flechita from '@icons/flechita.svg'

const MyOrder = () => {
  const { state, toggleOrders } = useContext(AppContext)
  const sumTotal = () => {
    const reducer = (accumulator: number, currentValue: any) =>
      accumulator + currentValue.price
    const sum = state!.cart.reduce(reducer, 0)
    return sum
  }

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img src={flechita} alt='arrow' onClick={() => toggleOrders!()} />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        <div className='order-items'>
          {state!.cart.map((item: any, index: number) => (
            <OrderItem item={item} key={`${index}-${item.id}`} index={index} />
          ))}
        </div>

        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  )
}

export default MyOrder
