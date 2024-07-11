import React from 'react'
import './forgotPassword.css';
import loginImg from '../../assets/loginImg.png';
import {androidArrowBack} from 'react-icons-kit/ionicons/androidArrowBack'
import Icon from 'react-icons-kit'
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <>
        <section className="f-pass-wrapper">
            <div className="f-pass-container">
                <div className="f-pass-left">
                     <img src={loginImg} alt="" />
                </div>
                <div className="f-pass-right">
                    <div className="back-arrow">
                       <Icon icon={androidArrowBack} size={32}  style={{ color: '#0D2D44' }} /> <span> <Link to='/Login'   style={{ textDecoration: 'none', color: 'blue' }}>Back</Link></span>
                    </div>
                     <div className="f-pass-head">
                        <h1>Forgot Password</h1>
                     </div>
                     <div className="f-pass-subhead">
                      <p>
                      Enter your email address and we'll send you a OTP to reset your password.
                      </p>
                     </div>
                     <label htmlFor="">
                            E-Mail
                            <input type="email"
                              placeholder="Enter E-Mail" 
                              required
                              />
                     </label>
                     <Link to='/OTPVerification'>
                      <button className="send-btn">
                          SEND
                      </button>
                     </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default ForgotPassword