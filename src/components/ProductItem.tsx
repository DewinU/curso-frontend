import { useContext, useEffect, useState } from 'react'
import '@styles/ProductItem.scss'
import addToCartIcon from '@icons/bt_add_to_cart.svg'
import itemAddedIcon from '@icons/bt_added_to_cart.svg'
import AppContenxt from '@context/AppContext'

type ProductItemProps = {
  id?: number
  title?: string
  price?: number
  description?: string
  images?: string[]
}

const ProductItem = ({ product }: any) => {
  const { addToCart, removeFromCart, state } = useContext(AppContenxt)
  const [icon, setIcon] = useState(addToCartIcon)

  const handleAddToCart = (item: any) => {
    addToCart!(item)
  }

  useEffect(() => {
    const isInCart = state!.cart.find((item: any) => item.id === product.id)
    if (isInCart) {
      setIcon(itemAddedIcon)
    } else {
      setIcon(addToCartIcon)
    }
  }, [state!.cart])

  const handleRemoveToCart = (item: any) => {
    removeFromCart!(item)
  }

  const handleClick = (item: any) => {
    if (icon == addToCartIcon) return handleAddToCart(item)
    return handleRemoveToCart(item)
  }

  const { id, title, price, images } = product
  return (
    <div className='ProductItem'>
      <img
        src={images[0]}
        alt={title}
      />
      <div className='product-info'>
        <div>
          <p>${price}</p>
          <p>{title}</p>
          <p>{}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={icon} alt='' />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
