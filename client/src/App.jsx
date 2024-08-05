
import './App.css'
// import Login from './auth/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from './Pages/dashboard/Dashboard';
// import ForgotPassword from './auth/ForgotPassword/ForgotPassword';
// import OTPVerfication from './auth/ForgotPassword/OTPVerfication';
// import ResetPassword from './auth/ForgotPassword/ResetPassword';
import SideBar from './Components/SideBar';
import Dashboard from './Student/Pages/Dashboard';
import Navbar from './Components/NavBar';
function App() {


  return (
    <BrowserRouter>
    <div className="app-container">
    <div className="sidebar">
    <SideBar/>
    </div>
      <div className="main-content">
    <Navbar/>
     <div className="content">
   <Routes>
    <Route path='/' element={<Dashboard/>} />
    

   
   </Routes>
     </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
