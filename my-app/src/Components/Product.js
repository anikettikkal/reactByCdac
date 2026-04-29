import React from 'react'

export default function Product(props) {
    console.log(props);

    // function myFunc(){
    //     props.price="3000";
    // }
    
  return (
    <>
    <div>Product</div>
    <div>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <button>Add to Cart</button>
    </div>
    </>
    
  )
}
