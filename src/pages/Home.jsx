import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Values from '../components/Values'
import OurProducts from '../components/OurProducts'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <OurProducts />
    </>
  )
}

export default Home
