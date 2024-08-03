import './App.css'
import Login from './auth/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './auth/Register';
import Dashboard from './Pages/Dashboard';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Package from './Pages/Package';
import Assesment from './Pages/Assesment';
import Session from './Pages/Session';
import Traning from './Pages/Traning';
import Reports from './Pages/Reports';
// import NavBar from './Components/NavBar';
import PackageHistory from './Pages/PackageHistory';
import Counselling from './Pages/Counselling';
import CounsellorDetails from './Pages/CounsellorDetails';
import SessionHistory from './Pages/SessionHistory';
import SessionCancelation from './Pages/SessionCancelation';
import UserProfile from './Pages/UserProfile';
// import Profile  from './Pages/Profile';
function App() {
return (
    <BrowserRouter>
    <div className="app-container">
    <Routes>
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        <Route path = "/Login" element={<Login />} />
        <Route path = "/Register" element={<Register/>}/>
      </Routes>
    {/* <div className="sidebar">
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
       </Routes>
     </div>
      </div> */}
    </div>
    </BrowserRouter>
  )
}

export default App
