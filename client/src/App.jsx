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
    </BrowserRouter>
  )
}

export default App
