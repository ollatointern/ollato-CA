import React from 'react'
import { useState } from 'react';
import './login.css';
import loginImg from '../assets/loginImg.png'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import {Link} from 'react-router-dom';
const Login = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

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

    
    //    for password field 
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    

    const handleToggle = () =>{
        if (type === 'password'){
            setIcon(eye);
            setType('text')
        }else{
            setIcon(eyeOff)
            setType('password')
        }
    };
  return (
    <>
        <section className="login-wrapper">
            <div className="login-container">
                   <div className="login-left">
                    <img src={loginImg} alt="" />
                   </div>
                   <div className="login-right">
                      <div className="login-right-top">

                      </div>
                      <h1 className='loginHead'>Login</h1>
                    <form className='loginForm' action="">
                    
                      <div className="input-fields">
                      <label htmlFor="">
                            Email or Mobile Number 
                            <input type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter email or mobile number" />
                        </label>

                        
              <label htmlFor="">
                Password
                <input className='passField'
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"


              
                  />
                <span className='eyeIcon'  onClick={handleToggle}> 
                     <Icon class="absolute mr-10" icon={icon} size={25}/>
                 </span>
           
              </label>
              <div className="forget-pass">
                <p>
                    <Link  to="/ForgotPassword" style={{ textDecoration: 'none' }}> Forget password?</Link>
                </p>
            </div>

            <div>
                <button className="login-btn">
                    LOGIN
                </button>
            </div>

            </div>
          

           
              </form>

         <div className="or">
            <div className="line1"></div>
            <p>or</p>
            <div className="line2"></div>
         </div>

         <div className="signinOTP">
            <p>Login With OTP</p>
         </div>

         <div className="createAccount">
            <p> Don't have account yet? <Link to="#" style={{ textDecoration: 'none' }}> <strong>Create an account</strong></Link></p>
         </div>
         </div>    
         
         </div>


       
        </section>
    </>
  )
}

export default Login