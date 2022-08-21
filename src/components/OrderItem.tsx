import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import '@styles/OrderItem.scss'
import iconClose from '@icons/icon_close.png'

const OrderItem = ({ item, index }: any) => {
  const { title, price } = item
  const { removeFromCart } = useContext(AppContext)

  return (
    <div className='OrderItem'>
      <figure>
        <img
          src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt={title}
        />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={iconClose} alt='close' onClick={() => removeFromCart!(index)} />
    </div>
  )
}

export default OrderItem
