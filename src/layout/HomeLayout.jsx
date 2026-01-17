import React from 'react'
import { Navbar } from '../Components/Shars/Navbar'
import { Hero } from '../Components/Home/Hero'


export const HomeLayout = () => {
  return (
    <div className='max-w-325 mx-auto px-12.5'>
      <Navbar/>
      <Hero></Hero>

    </div>
  )
}
