import React, { useRef, useEffect } from 'react';
import axios from "axios";

export default function Adduser() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  let x4 = useRef();
  let x5 = useRef();

  function myFunction(e) {
    e.preventDefault();

    const name = x1.current.value;
    const price = x2.current.value;
    const discount = x3.current.value;
    const description = x4.current.value;

    if (!name || !price || !discount || !description) {
      x5.current.innerHTML = "All Fields Are Compulsory";
      return;
    }

    axios.post("http://localhost:9000/api/products", {
      name,
      price,
      discount,
      description
    })
      .then((res) => {
        console.log(res.data);
        x5.current.innerHTML = "Data Added Successfully!";
      })
      .catch((err) => {
        console.log(err);
        x5.current.innerHTML = "Error while adding data";
      });

  }


  return (
    <div>
      <form onSubmit={myFunction} method='POST' action="/submit">
        <input type="text" placeholder="Enter Product Name" ref={x1} />
        <br /><br />

        <input type="number" placeholder="Enter Price" ref={x2} />
        <br /><br />

        <input type="number" placeholder="Enter discount" ref={x3} />
        <br /><br />

        <input type="text" placeholder="Enter description" ref={x4} />
        <br /><br />

        <button type="submit">Submit</button>
        <p ref={x5}>

        </p>
      </form>
    </div>
  )
}
