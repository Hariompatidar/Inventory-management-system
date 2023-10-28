import React from 'react'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import Inventory from './screens/Inventory'
import ProductInfo from './screens/ProductInfo'
import { useSelector } from 'react-redux'
import { isLoggedIn } from './redux/slices/loginSlice'
import CreateStock from './screens/CreateStock'
import Sidebar from './components/Sidebar/Sidebar'
function App() {
  const login = useSelector(isLoggedIn) ; 
  
  return (
    
    <div className='App'>
<Navbar />
    {/* <Sidebar /> */}
    <Routes>
      <Route exact path='/' element={ login ?  <Inventory />   :  <Home />}  />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element = {<Register />}/>
      <Route path='/info' element = {<ProductInfo />}/>
      <Route path='/stock' element = {<CreateStock />}/>
      

      
    </Routes>
   
    </div>
    
  )
}

export default App