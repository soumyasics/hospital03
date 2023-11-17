import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hospital_log from './Hospital_log';
import 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route element={<Hospital_log/>} path="/Hospitallogin" />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
