import React from 'react'

import './Header.css'
// import ExploreMenu from '../ExploreMenu/ExploreMenu'
// import { useNavigate } from 'react-router-dom'

const Header = () => {

  // const navigate = useNavigate();


  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food from here.</h2>
            <p>Choose from a diverse menu featuring a delectable</p>
            {/* <button onClick={()=>navigate('/ExploreMenu')}>View Menu</button> */}
        </div>
    </div>
  )
}

export default Header