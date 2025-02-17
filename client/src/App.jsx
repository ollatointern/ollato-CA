
import './App.css'
// import Login from './auth/Login'
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
import PackageHistory from './Pages/PackageHistory';
import Counselling from './Pages/Counselling';
import CounsellorDetails from './Pages/CounsellorDetails';
import SessionHistory from './Pages/SessionHistory';
import SessionCancelation from './Pages/SessionCancelation';
import UserProfile from './Pages/UserProfile';
import AdminPanel from './Components/adminPanel/AdminPanel';
import TestProcess from './Components/testProcess/TestProcess';
// import Profile  from './Pages/Profile';
function App() {


  return (
    <BrowserRouter>
    <div className="app-container">
    <div className="sidebar">
    <SideBar/>
    </div>
      <div className="main-content">
      <NavBar/>
     <div className="content">
     <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/Package' element={<Package/>}/>
       <Route path='/PackageHistory' element={<PackageHistory/>}/>
       <Route path='/Assesment' element={<Assesment/>}/>
       <Route path='/Session' element={<Session/>}/>
       <Route path='/Traning' element={<Traning/>}/>
       <Route path='/Reports' element={<Reports/>}/>
       <Route path='/Counselling' element={ <Counselling />}/>
       <Route path='/Counsellor/:id' element={<CounsellorDetails />}/>
       <Route path='/SessionHistory' element={<SessionHistory />}/>
       <Route path='/UserProfile' element={<UserProfile/>}/>
       <Route path='/cancel-session/:id' element={<SessionCancelation/>}/>
       <Route path="/admin" element={<AdminPanel/>}/>
       <Route path='/TestProcess' element={<TestProcess/>} />
       </Routes>
     </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
