import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { useContext } from "react";
import { MyContext } from "./context/context";

function App() {
  const { user } = useContext(MyContext);
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user ? (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/cart">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png"
                width="30"
                alt=""
              />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
       {/*    <Route>
            <Route index element={<Home />} />
          </Route> */}
          <Route path="/login" element={<Login /> } />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




/* function ProtectRoute({children}){
  const {user}= useContext(MyContext)
  return (
    <>{user ? <Navigate to="/profile"/>: children }</>
  )
} */