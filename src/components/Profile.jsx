import React, { useContext } from 'react'
import { MyContext } from '../context/context'
import{ Navigate} from "react-router-dom"

export default function Profile() {
  const {user, setUser} = useContext(MyContext)
const logoutUser =()=>{
  setUser(null)
  localStorage.removeItem("token")
}

  return (
    <>
    {user ?
        <div>
        <h1>This is Profile Component</h1>
        <h2>{user.first_name} {user.last_name}</h2>
        <h3>{user.email}</h3>
        <img src={user.profile_avatar} width={100} alt="" /><br />
        <button onClick={logoutUser}>Logout</button>
   </div>:
   <Navigate to="/login"/>
    }
     </>
 
  )
}
