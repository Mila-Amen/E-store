import React, { useContext } from 'react'
import { MyContext } from '../context/context'

export default function Home() {
  //consuming/using context value
  const {products} = useContext(MyContext)
  return (
    <div className='container' >
         <div className='productCard'>
          {products.length===0 ? <h1>loading ....</h1> : products.map(item=>{
            return <div className='card'>
              <h2>{item.name}</h2>
              <img src={item.image[1]} alt="" />
              <h1>${item.price}</h1>
              
              <button>add to cart</button>
            </div>
          })}
         </div>
    </div>
  )
}
