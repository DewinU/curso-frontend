import React from 'react'
import ProductItem from '@components/ProductItem'
import '@styles/ProductList.scss'
import useGetProducts from '@hooks/useGetProducts'

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
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
