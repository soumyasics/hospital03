import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import DoctorsProfile from './Doctorspage/DoctorsProfile';
import SingleCard from './Doctorspage/SingleCard';
import Staffprofiles from './Staffpage/Staffprofiles';
import Staffadding from './Staffpage/Staffadding';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/doctorspage'element={<DoctorsProfile/>}/>
       <Route path='viewdetails' element={<SingleCard/>}/>
       <Route path='/staffprofiles' element={<Staffprofiles/>}/>
       <Route path='/addstaff' element={<Staffadding/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
