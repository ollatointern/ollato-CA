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


function App() {
return (
    <BrowserRouter>
    <div className="app-container">
    {/* <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path = "/Login" element={<Login />} />
        <Route path = "/Register" element={<Register/>}/>
      </Routes> */}
    <div className="sidebar">
    <SideBar/>
    </div>
      <div className="main-content">
      <NavBar />
     <div className="content">
     <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/Package' element={<Package/>}/>
       <Route path='/Assesment' element={<Assesment/>}/>
       <Route path='/Session' element={<Session/>}/>
       <Route path='/Traning' element={<Traning/>}/>
       <Route path='/Reports' element={<Reports/>}/>
       </Routes>
     </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
