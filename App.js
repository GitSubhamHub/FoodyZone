import React, { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import StoreContextProvider from './context/StoreContext'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
        <StoreContextProvider>
        <Link to="/">Home</Link><br />
        <Link to="/Cart">Cart</Link><br />
        <Link to="/PlaceOrder">PlaceOrder</Link><br />

        <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/Cart' Component={Cart} />
        <Route exact path='/PlaceOrder' Component={PlaceOrder} />
        </Routes>
        </StoreContextProvider>
    </div>
    <Footer />
    </>
   
  )
}

export default App;