import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Dashboard from './pages/Dashboard'

function Student() {
    return (
        <div>
            <NavBar />
            <SideBar />
            <Dashboard />
        </div>
    )
}

export default Student