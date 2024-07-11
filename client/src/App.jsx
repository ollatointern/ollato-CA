
import './App.css'
import Login from './auth/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/dashboard/Dashboard';
import ForgotPassword from './auth/ForgotPassword/ForgotPassword';
import OTPVerfication from './auth/ForgotPassword/OTPVerfication';
import ResetPassword from './auth/ForgotPassword/ResetPassword';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path = "/Login" element={<Login />} />
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='/enterOTP' element ={<OTPVerfication/>} />
        <Route path='/ResetPassword' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
