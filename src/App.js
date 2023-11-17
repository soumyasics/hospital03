import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StaffLogin from './staff/staff login/StaffLogin'
import AppointmentForm from './staff/Appointment/AppointmentForm';
import HospitalLog from './Hospital management/HospitalLog';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<StaffLogin/>} path="/staffLogin" />
        <Route path="/appointmentForm" element={<AppointmentForm/>}/>
        <Route path="/hospitalLog" element={<HospitalLog/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
