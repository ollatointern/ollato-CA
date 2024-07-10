
import './App.css'
import Login from './auth/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/dashboard/Dashboard';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path = "/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
