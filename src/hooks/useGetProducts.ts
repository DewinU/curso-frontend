import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetProducts = (API: string) => {
  const [products, setProducts] = useState<any[]>([])

  // useEffect(() => {
  //   fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  // }, [])

  useEffect(() => {
    async function fetchData() {
      const respose = await axios(API)
      setProducts(respose.data)
    }
    fetchData()
  }, [])
  return products
}

export default useGetProducts
