import React from 'react'

export default function Register() {
  const registerUser= (e)=>{
    e.preventDefault()
    const user= {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password:e.target.password.value
    }
    fetch("http://localhost:5000/users", {
      method:"POST",
      body: JSON.stringify(user),
      headers: {"content-type":"application/json"}
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
    })

  }
  return (
    <div>
         <h1>This is Register Component</h1>
         <form onSubmit= {registerUser}>
          <label>First Name: <input type="text" name="first_name" /></label><br />
          <label>Last Name: <input type="text" name="last_name" /></label><br />
          <label>Email: <input type="email" name="email" /></label><br />
          <label>Password: <input type="password" name="password" /></label><br />
          <input type="file" name="profile_image" /><br />
          <button>register</button>

         </form>
    </div>
  )
}
