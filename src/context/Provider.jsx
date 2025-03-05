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
            console.log(result)
        }else{
            console.log(result.message)
        }
    })
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
