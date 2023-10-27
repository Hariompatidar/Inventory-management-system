import React from 'react'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import Inventory from './screens/Inventory'
function App() {
  return (
    
    <div className='App'>

    <Navbar />
    <Routes>
      <Route exact path='/' element={ localStorage.getItem('authToken')  ?  <Inventory />   :  <Home />}  />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element = {<Register />}/>
      
    </Routes>
   
    </div>
    
  )
}

export default App