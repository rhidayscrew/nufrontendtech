import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";



function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="register" element={<Register/>}/>
         <Route path='dashboard' element={<><Navbar /> <Dashboard /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
