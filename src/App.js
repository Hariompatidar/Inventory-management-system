import React, { useEffect, useState } from 'react'
import Home from './screens/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import Inventory from './screens/Inventory'
import ProductInfo from './screens/ProductInfo'
import { useSelector, useDispatch } from 'react-redux'
import { isLoggedIn, setLogin } from './redux/slices/loginSlice'
import CreateStock from './screens/CreateStock'
// import Sidebar from './components/Sidebar/Sidebar'
import Nav from './components/Nav'
import SellStock from './screens/SellStock'
import AllUsers from './screens/AllUsers'
import Dashboard from './screens/Dashboard'


function App() {

  const login = useSelector(isLoggedIn)
  const dispatch = useDispatch();

  useEffect(() => { if (localStorage.getItem('authToken')) { dispatch(setLogin(true)) } }, [])




  return (

    <div className='flex'>
      <Nav />
    
    
      <div className='flex-auto'>
        <Routes>
          <Route exact path='/' element={login ? <Inventory /> : <Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/info' element={<ProductInfo />} />
          <Route path='/stock' element={<CreateStock />} />
          <Route path='/sellstock' element={<SellStock />} />
          <Route path='/allusers' element={<AllUsers />} />
          <Route path='/dashboard' element={<Dashboard />} />



        </Routes>
      </div>
    </div>

  )
}

export default App