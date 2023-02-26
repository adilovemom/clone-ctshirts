import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home'
import ProductPage from './productpage'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<ProductPage/>} />
   </Routes>
  )
}
