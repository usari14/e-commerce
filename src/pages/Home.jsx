// import React from 'react'

import Banner from "../components/Banner"
import Categories from "../components/Categories"
import Productslist from "../components/Productslist"
import PopularSearches from "../components/PopularSearches"
import { products, laptops, Headphone, Entertainment, smartPhone } from '../dataset/Dataset'
import Brands from "../components/Brands"

const Home = () => {
  console.log('products', products)
  console.log('laptops', laptops)
  return (
    <>
      <Banner />
      <Categories />
      <Productslist heading="Deals of the day" products={products} ptop={16} />
      <PopularSearches />
      <Productslist heading="Laptops & Computer" products={laptops} ptop={10} />
      <Productslist heading="HeadPhones" products={Headphone} ptop={10} />
      <Productslist heading="Tv & Entertainment" products={Entertainment} ptop={10} />
      <Productslist heading="SmartPhones & Tablets" products={smartPhone} ptop={10} />
      <Brands/>
    </>
  )
}

export default Home
