import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { bell } from 'react-icons-kit/fa/bell';
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
            <div className="user-profile" style={{
              display:'flex',
              alignItems:'center',
              gap:'20px'
            }}>
              <span className='pro-pic' style={{
                height: '40px',
                width: '40px',
              }}>
                <Link className='custom-link' to='./Profile'>userName</Link>
              </span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default NavBar