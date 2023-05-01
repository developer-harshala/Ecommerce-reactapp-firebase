import Banner from '../components/Banner'
import Products from '../components/Products'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([])
  const data = useLoaderData()

  useEffect(() => {
    setProducts(data.data)
  }, [data])

  return (
    <>
      <Banner />
      <Products products={products} />
    </>
  )
}

export default Home
