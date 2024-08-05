import React from 'react'
import './resetPassword.css'
import loginImg from '../../assets/loginImg.png';
import Logo from '../../assets/ollatoLogo.png'

import {androidArrowBack} from 'react-icons-kit/ionicons/androidArrowBack'
import Icon from 'react-icons-kit'
import { Link } from 'react-router-dom';
const ResetPassword = () => {
  return (
    <>
        <section className="reset-pass-wrapper">
            <div className="reset-pass-container">
                <div className="reset-pass-left">
                     <img src={Logo} alt="" />
                </div>
                <div className="reset-pass-right">
                <div className="back-arrow">
                       <Icon icon={androidArrowBack} size={32}  style={{ color: '#0D2D44' }} /> <span> <Link to='/Login'   style={{ textDecoration: 'none', color: 'blue' }}>Back</Link></span>
                </div>
                <div className="reset-pass-head">
                    <h1>Reset Password</h1>
                </div>
                <form action="">
                    <label htmlFor="">
                        New Password 
                        <input type="text" 
                            placeholder='Enter New Password'
                        />
                    </label>
                    <label htmlFor="">
                          Confirm Password 
                        <input type="text" 
                            placeholder="Re-Enter Password"
                        />
                    </label>

                    <button className="reset-btn">
                        RESET
                    </button>
                </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default ResetPassword