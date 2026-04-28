import React, { useRef } from 'react';
import axios from "axios";

export default function Adduser() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  let x4 = useRef();
  function myFunction(e) {
    e.preventDefault();
    // console.log(x1, x2, x3);
    // console.log(x1.current.value, x2.current.value, x3.current.value);
    if (x1.current.value == "" || x2.current.value == "" || x3.current.value == "") {
      x4.current.innerHTML = "All Fields Are Compulsory";
    }
    else {
      axios.post("http://localhost:8000/api/users", {
        name: x1.current.value,
        age: x2.current.value,
        place: x3.current.value,
      })
        .then((res) => {
          console.log(res);  
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <form onSubmit={myFunction} method='POST' action="/submit">
        <input type="text" placeholder="Enter Name" ref={x1} />
        <br /><br />

        <input type="number" placeholder="Enter Age" ref={x2} />
        <br /><br />

        <input type="text" placeholder="Enter Place" ref={x3} />
        <br /><br />

        <button type="submit">Submit</button>
        <p ref={x4}>

        </p>
      </form>
    </div>
  )
}
