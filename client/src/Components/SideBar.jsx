import React from 'react'
import './sideBar.css';
import Dlogo from '../assets/Dlogo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GoFileDirectoryFill } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { FiCheckSquare } from "react-icons/fi";
import { RiBarChartBoxFill } from "react-icons/ri";
import { IoBookmarkSharp } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
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
                    <Link className='customLink' to='/' onClick={()=>handelSelectActive('Dashboard')} style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'6px'
                    }}>
                    <IoHome size={26} /> Dashboard
                    </Link>
                   </li>
                   <li id={activeLink === 'Package' ? 'active': '' }>
                    <Link className='customLink' to='./Package' onClick={()=>handelSelectActive('Package')}  style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'6px'
                    }}>
                    <PiSquaresFourFill size={26} /> Package
                    </Link>
                   </li>
                   <li id={activeLink === 'Assesment' ? 'active': '' }>
                    <Link className='customLink' to='./Assesment' onClick={()=>handelSelectActive('Assesment')}  style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'6px'
                    }}>
                    <FiCheckSquare size={26} /> Assesment
                    </Link>
                   </li>
                   <li id={activeLink === 'Session' ? 'active': '' }>
                    <Link className='customLink' to='./Session' onClick={()=>handelSelectActive('Session')}  style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'6px'
                    }}>
                    <RiBarChartBoxFill  size={26}/> Session
                    </Link>
                   </li>
                   <li id={activeLink === 'Reports' ? 'active': '' }>
                    <Link className='customLink' to='./Reports' onClick={()=>handelSelectActive('Reports')}  style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'6px'
                    }}>
                      <TbReportSearch size={26} /> Reports
                    </Link>
                   </li>
                   {/* <li id={activeLink === 'Traning' ? 'active': '' }>
                    <Link className='customLink' to='./Traning' onClick={()=>handelSelectActive('Traning')}  style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'6px'
                    }}>
                      Training
                    </Link>
                   </li> */}
                   <li id={activeLink === 'Counselling' ? 'active': '' }>
                    <Link className='customLink' to='./Counselling' onClick={()=>handelSelectActive('Counselling')}  style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'6px'
                    }}>
                     <IoBookmarkSharp  size={26}/> Counselling
                    </Link>
                   </li>
                </ul>
            </div>
            <div className="logoutBtn">
              <button className="logout-btn">
                LOGOUT
              </button>
            </div>
       </div> 
        </div>
       
    </>
  )
}

export default SideBar