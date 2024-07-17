import React from 'react'
import './Navbar.css'
import {bell} from 'react-icons-kit/fa/bell';
import Icon from 'react-icons-kit';
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
           {/* <div className="notifi">
           <Icon icon={bell} size={32} style={{ color: 'white' }} /> 
            </div> */}
            <div className="user-profile">
              <span className='pro-pic' style={{
                height:'40px',
                width:'40px',
              }}></span>
                 userName
                
            </div>
            </div>
           </div>
          
        </div>
    </>
  )
}

export default NavBar