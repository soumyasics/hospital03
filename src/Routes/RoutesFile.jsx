import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StaffLogin from '../staff/staff login/StaffLogin'

export default function RoutesFile() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route element={<StaffLogin/>} path="/" />  
        <Route element={<StaffLogin/>} path="/staffLogin" />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
