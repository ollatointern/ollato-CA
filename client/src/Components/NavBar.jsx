import React from 'react'
import './Navbar.css'

const NavBar = () => {
  return (
    <>
        <div className="Navbar-container">
            <div className="nav-content">
            <input
           type="text"
           placeholder="Search..."
      
            />
           <div className='nav-right'>
           <div className="notifi">
                Notification
            </div>
            <div className="user-profile">
                 user
                 <div className="pro-pic">

                 </div>
            </div>
            </div>
           </div>
          
        </div>
    </>
  )
}

export default NavBar