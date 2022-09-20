import ProductItem from '@components/ProductItem'
import '@styles/ProductList.scss'
import useGetProducts from '@hooks/useGetProducts'
import AppContext from '@context/AppContext'
import { useContext } from 'react'

const API = 'https://api.escuelajs.co/api/v1/products'
interface ProductItemProps {
  id: number
  title: string
  price: number
  description: string
  images: string[]
}

const ProductList = () => {
  const products = useGetProducts(API)

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map((product: any) => (
          <ProductItem key={product.id} product={product} cart='' />
        ))}
      </div>
    </section>
  )
}

export default ProductList
