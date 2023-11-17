
import logo from './logo.svg';
import './App.css';

import AppointmentForm from './AppointmentForm';
//import Router from './Router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      { <BrowserRouter>
      <Routes>
        <Route element={<AppointmentForm/>} path="/AppoimentForm"/>
      </Routes>
      </BrowserRouter>
  }
    </div>
  );
}

export default App;
