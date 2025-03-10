import React, { useContext } from "react";
import { MyContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { carts, user, setCarts } = useContext(MyContext);
 const navigate= useNavigate()
  const placeOrder = () => {
    if(!user) {
       return navigate("/login")
    }
    const payload = {
      userId: user._id,
      products: carts.map((item) => item._id), // ["asdfhagfhgjdfserw5543","14qwqresdasfdfq342"]
      totalPrice: carts.reduce((acc, item) => {
        acc = acc + item.price * item.quantity;
        return acc;
      }, 0),
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json", token: localStorage.getItem("token") },
      body: JSON.stringify(payload),
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.success){
        console.log(result)
        setCarts([])
        alert("Thanks for placing order on our store!")
      }else{
        console.log(result.message)
      }
    })
  };
  return (
    <div>
      <h1>This is Cart Component</h1>
      <div>
        {carts.map((product) => {
          return (
            <div key={product._id} style={{ display: "flex", margin: "10px" }}>
            {/*   <img src={product.image[0]} width={100} alt="" /> */}
              <h2>{product.name||product.title}</h2>
              <h2>${product.price}</h2>
              <h3>
                quantity: <button>+</button>
                {product.quantity} <button>-</button>
              </h3>
            </div>
          );
        })}
      </div>
      {carts.length > 0 ? (
        <button onClick={placeOrder}>checkout</button>
      ) : (
        <h2>Cart is Empty ...</h2>
      )}
    </div>
  );
}
