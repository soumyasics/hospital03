import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import DoctorsProfile from './Doctorspage/DoctorsProfile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Navbar/>
      <Routes>
       <Route path='/doctorspage'element={<DoctorsProfile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
