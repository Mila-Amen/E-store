import React, { useContext } from "react";
import { MyContext } from "../context/context";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        //extract token out from header
        const token = res.headers.get("token");
        localStorage.setItem("token", token);
        return res.json();
      })
      .then((result) => {
        if (result.success) {
          //user successfully logged in!
          console.log(result);
          //storing user in the context
          setUser(result.data);
          navigate("/profile");
        }
      });
  };
  return (
    <>
   
      {   user ? (
        <Navigate to="/profile" />
      ) : (
        <div>
          <h1>This is Login Component</h1>
          <form onSubmit={loginUser}>
            <label>
              Email: <input type="email" name="email" />
            </label>
            <br />
            <label>
              Passowrd: <input type="password" name="password" />
            </label>
            <br />
            <button>login</button>
          </form>
        </div>
      )}
    </>
  );
}
