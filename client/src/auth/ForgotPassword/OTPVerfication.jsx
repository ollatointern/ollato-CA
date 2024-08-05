import React from 'react'
import loginImg from '../../assets/loginImg.png';
import Logo from '../../assets/ollatoLogo.png'
import './otpVerification.css';
import {androidArrowBack} from 'react-icons-kit/ionicons/androidArrowBack'
import Icon from 'react-icons-kit'
import { Link } from 'react-router-dom';
const OTPVerfication = () => {
  return (
    <>
        <section className="otp-v-wrapper">
            <div className="otp-v-container">
                <div className="otp-left">
                     <img src={Logo} alt="" />
                </div>
                <div className="otp-right">
                <div className="back-arrow">
                       <Icon icon={androidArrowBack} size={32}  style={{ color: '#0D2D44' }} /> <span> <Link to='/Login'   style={{ textDecoration: 'none', color: 'blue' }}>Back</Link></span>
                </div>
                <div className="otp-head">
                        <h1>One Time Password</h1>
                </div>
                <div className="otp-subHead">
                  <p>
                  We sent you 4 digit OTP number in your Email ID abc@xyz.com
                  </p>
                </div>
                  <form action="">
                  <div className='otp-input-field'>
                    <label htmlFor="">
                      One Time Password 
                     <div className="input-field">
                     <input type="text"  placeholder='X'/>
                      <input type="text" placeholder='X' />
                      <input type="text" placeholder='X' />
                      <input type="text" placeholder='X' />
                     </div>
                    </label>
                   </div>
                   <button className="submit-btn">SUBMIT</button>
                  </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default OTPVerfication