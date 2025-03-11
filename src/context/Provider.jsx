import React, { useEffect, useState } from "react";
import { MyContext } from "./context";

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then(res=>res.json())
    .then(result=>{
        if(result.success){
            setProducts(result.data)
            /* console.log(result) */
        }else{
            console.log(result.message)
        }
    })

    const querydata = new URLSearchParams(window.location.search)
    if(querydata.get("success")){
      alert("order placed successfully!")
    }
    if(querydata.get("canceled")){
      alert("order canceled!")
    }
  },[])


  useEffect(()=>{
    //check the token in localstorage
    const token = localStorage.getItem("token")
    if(token){
      fetch("http://localhost:5000/users/verifytoken",
      {
        method:"GET", 
        headers:{"token":token}
      })
      .then(res=>res.json())
      .then(result=>{
        if(result.success){
          setUser(result.data)
          console.log(result.data)
        }else{
          alert(result.message)
        }
      })
    }
  },[])


  return (
    <MyContext.Provider
      value={{ user, setUser, products, setProducts, carts, setCarts }}
    >
      {children}
    </MyContext.Provider>
  );
}

{
  /* <Provider>
    <App></App>
</Provider> */
}
