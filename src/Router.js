import { BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'
import './Hospital_log'
import Hospital_log from "./Hospital_log";

function Router() {
  return (
   
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/Hospitallogin" element={<Hospital_log/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    
  )
}

export default Router