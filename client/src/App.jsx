
import './App.css'
import Login from './auth/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from './Pages/dashboard/Dashboard';
// import ForgotPassword from './auth/ForgotPassword/ForgotPassword';
// import OTPVerfication from './auth/ForgotPassword/OTPVerfication';
// import ResetPassword from './auth/ForgotPassword/ResetPassword';
import SideBar from './Components/SideBar';
import Dashboard from './Pages/Dashboard';
import Package from './Pages/Package';
import Assesment from './Pages/Assesment';
import Session from './Pages/Session';
import Traning from './Pages/Traning';
import Reports from './Pages/Reports';
import NavBar from './Components/NavBar';
function App() {


  return (
    <BrowserRouter>
    <div className="app-container">
     <SideBar/>
      <div className="main-content">
      <NavBar />
      <Routes>
       <Route path='/Dashboard' element={<Dashboard/>}/>
       <Route path='/Package' element={<Package/>}/>
       <Route path='/Assesment' element={<Assesment/>}/>
       <Route path='/Session' element={<Session/>}/>
       <Route path='/Traning' element={<Traning/>}/>
       <Route path='/Reports' element={<Reports/>}/>
       </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
