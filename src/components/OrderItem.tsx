import  { useContext } from 'react'
import AppContext from '@context/AppContext'
import '@styles/OrderItem.scss'
import iconClose from '@icons/icon_close.png'

const OrderItem = ({ item }: any) => {
  const { title, price, images } = item
  const { removeFromCart } = useContext(AppContext)

  return (
    <div className='OrderItem'>
      <figure>
        <img
          src={images[0]}
          alt={title}
        />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={iconClose} alt='close' onClick={() => removeFromCart!(item)} />
    </div>
  )
}

export default OrderItem
