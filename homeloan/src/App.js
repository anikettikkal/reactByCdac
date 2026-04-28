import React, { useRef } from "react";

function App() {
  let p = useRef();
  let r = useRef();
  let n = useRef();
  let res = useRef();

  function myFunc(e) {
    e.preventDefault();
    if (p.current.value == "" || r.current.value == "" || n.current.value == "") {
      res.current.innerHTML = "All Fields Are Compulsory";
    }
    else {
      let pr = Number(p.current.value);
      let ra = Number(r.current.value)/12/100;
      let no = Number(n.current.value)*12;
      //res.current.innerHTML = (p.current.value*r.current.value*(1+r.current.value)**n.current.value)/((1+r.current.value)**n.current.value-1);
      res.current.innerHTML =(pr * ra * (1 + ra) ** no) / ((1 + ra) ** no - 1);
    }
  }

  return (
    <>
      <h1>Home Loan Calculator</h1>
      <form onSubmit={myFunc} method='POST' action="/submit">
        <input type="text" placeholder="Enter Principal Value" ref={p} />
        <br /><br />

        <input type="number" placeholder="Enter Rate of Interest" ref={r} />
        <br /><br />

        <input type="text" placeholder="Enter No of Years" ref={n} />
        <br /><br />

        <button type="submit">Submit</button>
        <p ref={res}>

        </p>
      </form>
    </>
  );
}

export default App;
