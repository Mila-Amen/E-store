import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function Home() {
  //consuming/using context value
  const { products, setCarts, carts } = useContext(MyContext);
  const addItemToCart = (item) => {
       /*  const copyCart = [...carts]
    copyCart.push(item)
    setCarts(copyCart) */
    const existItem= carts.find(each=>each._id===item._id)
    if(existItem){
      existItem.quantity++;
      setCarts([...carts])
    }else{
      /* setCarts([...carts, {...item, quantity:1}]) */
      item.quantity=1;
      setCarts([...carts,item])
    }
  };
  console.log(carts)
  return (
    <div className="container">
      <div className="productCard">
        {products.length === 0 ? (
          <h1>loading ....</h1>
        ) : (
          products.map((item) => {
            return (
              <div key={item._id} className="card">
                <h2>{item.name|| item.title}</h2>
                <img src={item.image[1]} alt="" />
                <h1>${item.price}</h1>

                <button onClick={() => addItemToCart(item)}>add to cart</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
