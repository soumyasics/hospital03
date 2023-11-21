// import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import StaffLogin from './staff/staff login/StaffLogin'
import AppointmentForm from './staff/Appointment/AppointmentForm';
import HospitalLog from './Hospital management/HospitalLog';
import DoctorsSchedule from './staff/Doctors/DoctorsSchedule';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/staffLogin"  element={<StaffLogin/>} />
        <Route path="/appointmentForm" element={<AppointmentForm/>}/>
        <Route path="/hospitalLog" element={<HospitalLog/>}/>
        <Route path="/doctorsSchedule"  element={<DoctorsSchedule/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
