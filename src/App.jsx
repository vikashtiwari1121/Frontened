import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Dashboard from './Pages/Admin/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/login' element={<><Header /><Login /></>} />
        <Route path='/signup' element={<><Header /><Signup /></>} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </>
  )
}

export default App
