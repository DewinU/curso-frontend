import React, { useContext } from 'react'
import '@styles/ProductItem.scss'
import addToCartIcon from '@icons/bt_add_to_cart.svg'
import AppContenxt from '@context/AppContext'

type ProductItemProps = {
  id?: number
  title?: string
  price?: number
  description?: string
  images?: string[]
}

const ProductItem = ({ product }: any) => {
  const { addToCart } = useContext(AppContenxt)

  const handleAddToCart = (item: any) => {
    addToCart!(item)
  }

  const { id, title, price, images } = product
  return (
    <div className='ProductItem'>
      <img
        src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt={title}
      />
      <div className='product-info'>
        <div>
          <p>${price}</p>
          <p>{title}</p>
          <p>{}</p>
        </div>
        <figure onClick={() => handleAddToCart(product)}>
          <img src={addToCartIcon} alt='' />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
