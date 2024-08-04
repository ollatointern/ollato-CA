import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import Student from './studentPanel/Student.jsx';
import Counsellor from './councellorPanel/Counsellor.jsx';
import Center from './centerPanel/Center.jsx';
import Admin from './adminPanel/Admin.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<Student />} />
          <Route path="/counsellor" element={<Counsellor />} />
          <Route path="/center" element={<Center />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
