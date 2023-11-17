import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hospital_log from './Hospital_log';
import StaffLogin from './staff/staff login/StaffLogin';
import AppointmentForm from './AppointmentForm';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route element={<Hospital_log/>} path="/Hospitallogin" />
    <Route element={<StaffLogin/>} path="/StaffLogin" />
    <Route element={<AppointmentForm/>} path="/AppointmentForm" />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
