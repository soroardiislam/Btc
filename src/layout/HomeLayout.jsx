import React from 'react'
import { Navbar } from '../Components/Shars/Navbar'
import { Hero } from '../Components/Home/Hero'
import Footer from '../Components/Shars/Footer'
import { Marque } from '../Components/Home/Marque'
import { Crypto } from '../Components/Home/Crypto'
import { Platform } from '../Components/Home/Platform'

export const HomeLayout = () => {
  return (
    <div className='max-w-325 mx-auto px-12.5'>
      <Navbar/>
      <Hero></Hero>
      <Marque></Marque>
      <Crypto></Crypto>
      <Platform></Platform>
      <Footer></Footer>
    </div>
  )
}
