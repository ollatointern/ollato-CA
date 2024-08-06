import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import SideBar from '../components/SideBar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Package from './pages/Package.jsx'
import Assesment from './pages/Assesment.jsx'
import Session from './pages/Session.jsx'
import Reports from './pages/Reports.jsx'
import Counselling from './pages/Counselling.jsx'


function Student() {
    return (

        <div className="app-container" style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100vh'
        }}>
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="main-content">
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path='/Dashboard' element={<Dashboard />} />
                        <Route path='/Package' element={<Package />} />
                        {/* <Route path='/PackageHistory' element={<PackageHistory/>}/> */}
                        <Route path='/Assesment' element={<Assesment />} />
                        <Route path='/Session' element={<Session />} />
                        {/* <Route path='/Traning' element={<Traning/>}/> */}
                        <Route path='/Reports' element={<Reports />} />
                        <Route path='/Counselling' element={<Counselling />} />
                        {/* <Route path='/Counsellor/:id' element={<CounsellorDetails />}/> */}
                        {/* <Route path='/SessionHistory' element={<SessionHistory />}/> */}
                        {/* <Route path='/UserProfile' element={<UserProfile/>}/> */}
                        {/* <Route path='/cancel-session/:id' element={<SessionCancelation/>}/> */}
                    </Routes>
                </div>
            </div>
        </div>

    )
}

export default Student