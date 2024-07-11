import React from 'react'
import loginImg from '../../assets/loginImg.png';
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
                     <img src={loginImg} alt="" />
                </div>
                <div className="otp-right">
                <div className="back-arrow">
                       <Icon icon={androidArrowBack} size={32}  style={{ color: '#0D2D44' }} /> <span> <Link to='/Login'   style={{ textDecoration: 'none', color: 'blue' }}>Back</Link></span>
                    </div>
                   
                </div>
            </div>
        </section>
    </>
  )
}

export default OTPVerfication