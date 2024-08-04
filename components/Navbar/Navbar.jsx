import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    
    const [menu,setMenu] = useState("home");

    // const {getTotalCartAmount} = useContext(StoreContext);
    
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("MobileApp")} className={menu==="MobileApp"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("Contactus")} className={menu==="Contactus"?"active":""}>Contact Us</a>
        </ul>
        <div className='navbar_right'>
            <img src={assets.search_icon} alt='' />
            <div className="navbar_search_icon" >
                <Link to='/cart'><img src={assets.menu_icon} alt="" /></Link>
                {/* <div className={getTotalCartAmount()===0?"":"dot"}></div> */}
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar