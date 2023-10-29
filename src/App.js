import React from 'react'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import Inventory from './screens/Inventory'
import ProductInfo from './screens/ProductInfo'
import { useSelector  } from 'react-redux'
import { isLoggedIn   } from './redux/slices/loginSlice'
import CreateStock from './screens/CreateStock'
// import Sidebar from './components/Sidebar/Sidebar'
import Nav from './components/Nav'
import SellStock from './screens/SellStock'
function App() {
  
  const login = useSelector(isLoggedIn)
  
  
  return (
    
    <div className='flex'>
    <Nav />
{/* <Navbar /> */}
 {/* <Sidebar /> */}
 <div className='flex-auto'>
    <Routes>
      <Route exact path='/' element={ login ?  <Inventory />   :  <Home />}  />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element = {<Register />}/>
      <Route path='/info' element = {<ProductInfo />}/>
      <Route path='/stock' element = {<CreateStock />}/>
      <Route path='/sellstock' element = {<SellStock />}/>
      

      
    </Routes> 
    </div>
    </div>
    
  )
}

export default App