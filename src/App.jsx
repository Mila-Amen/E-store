import {BrowserRouter, Routes,Route, NavLink} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import Cart from "./components/Cart"
import "./App.css"


function App() {
  return (
    <BrowserRouter>
     <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li style={{float:'right'}}><NavLink to="/cart"><img src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png" width="30"  alt="" /></NavLink></li>
      </ul>
     </nav>
<div>
  <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/login" element={<Login/>} /> 
    <Route path="/register" element={<Register/>} /> 
    <Route path="/profile" element={<Profile/>} /> 
    <Route path="/cart" element={<Cart/>} /> 
  </Routes>
</div>

    </BrowserRouter>
  )
}

export default App
