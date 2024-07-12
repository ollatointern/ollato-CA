import React from 'react'
import './sideBar.css';
import Dlogo from '../assets/Dlogo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SideBar = () => {

const [activeLink, setActiveLink]  = useState('Dashboard');

    const handelSelectActive = (linkName) =>{
        setActiveLink(linkName);
    }
  return (
    <>
       <div className="sideBar-wrapper">
        <div className="sideBar-container">
            <div className="d-logo">
                <img src={Dlogo} alt="" height={66} width={228} />
            </div>
            <div className="sideBar-links">
                <ul>
                   <li id={activeLink === 'Dashboard' ? 'active': '' }>
                    <Link className='customLink' to='./Dashboard' onClick={()=>handelSelectActive('Dashboard')}>
                      Dashboard
                    </Link>
                   </li>
                   <li id={activeLink === 'Package' ? 'active': '' }>
                    <Link className='customLink' to='./Package' onClick={()=>handelSelectActive('Package')}>
                      Package
                    </Link>
                   </li>
                   <li id={activeLink === 'Assesment' ? 'active': '' }>
                    <Link className='customLink' to='./Assesment' onClick={()=>handelSelectActive('Assesment')}>
                      Assesment
                    </Link>
                   </li>
                   <li id={activeLink === 'Session' ? 'active': '' }>
                    <Link className='customLink' to='./Session' onClick={()=>handelSelectActive('Session')}>
                      Session
                    </Link>
                   </li>
                   <li id={activeLink === 'Reports' ? 'active': '' }>
                    <Link className='customLink' to='./Reports' onClick={()=>handelSelectActive('Reports')}>
                      Reports
                    </Link>
                   </li>
                   <li id={activeLink === 'Traning' ? 'active': '' }>
                    <Link className='customLink' to='./Traning' onClick={()=>handelSelectActive('Traning')}>
                      Traning
                    </Link>
                   </li>
                </ul>
            </div>
           
        </div>
        <div className="logoutBtn">
              <button className="logout-btn">
                LOGOUT
              </button>
            </div>
       </div> 
    </>
  )
}

export default SideBar