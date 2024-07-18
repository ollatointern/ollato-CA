import './App.css'
import Login from './auth/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './auth/Register';
import Dashboard from './Pages/dashboard/Dashboard';
function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path = "/Login" element={<Login />} />
        <Route path = "/Register" element={<Register/>}/>
      </Routes>
    <div className="app-container">
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
