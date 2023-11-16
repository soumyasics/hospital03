import{ BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'
import AppointmentForm from "./AppointmentForm";

function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/AppointmentForm" element={<AppointmentForm/>}/>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Router