import React from 'react'
import { useState } from 'react';
import './forgotPassword.css';
// import loginImg from '../../assets/loginImg.png';
import {androidArrowBack} from 'react-icons-kit/ionicons/androidArrowBack'
import Icon from 'react-icons-kit'
import { Link  } from 'react-router-dom';
import Logo from '../../assets/ollatoLogo.png'
const ForgotPassword = () => {
  const [input , setInput] = useState('');
  // const history = useHistory();
  const validateInput = (input) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if(emailRegex.test(input)){
     return 'email';
    }else if(mobileRegex.test(input)){
     return 'mobile'
    }else{
     return 'Invalid'
    }
 }


  const handelSubmit  = (e) =>{
    e.preventDefault();

    // history.push('/enter-otp')
  }
  return (
    <>
        <section className="f-pass-wrapper">
            <div className="f-pass-container">
                <div className="f-pass-left">
                     <img src={Logo} alt="" />
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
                   <form onSubmit={handelSubmit} >
                   <label htmlFor="">
                            E-Mail
                            <input type="text"
                            onChange={(e) => setInput(e.target.value)}
                              placeholder="Enter E-Mail" 
                              required
                              />
                     </label>
                   </form>
                    
                     <Link to='/enterOTP'>
                     <button className="send-btn" type='submit'>
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