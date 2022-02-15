import Home from './pages/home'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/register'
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';
function App() {

  const {user} =useContext(AuthContext)
  return (
    
  <Router>
    <Routes>
      <Route path="/" element={user? <Home/>:<Login/>}/>
      <Route path="/login" element={user?<Navigate replace to="/"/>:<Login/>}/>
      <Route path="/register" element={user?<Navigate replace to="/"/>:<Register/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
    </Routes>
  </Router>
  );
}
export default App;
