import React, { useEffect, useState } from 'react'

export default function Comp3() {
  let [count , setCount] = useState(100);
  let [age , setAge] = useState(24);

  function myFunc(){
    setCount(count+10);
  }

  function myFunc1(){
    setAge(age+1);
  }

  // useEffect(()=>{
  //   console.log("use Effect Called" , count);
  // },[])

  // useEffect with return 
  // useEffect(()=>{
  //   console.log("use Effect Called" , count);
  //   return ()=>{
  //     console.log("Component unmount");
  //   };
  // },[])

  useEffect(()=>{
    console.log("use Effect Called", count , age); // conditional rendering i.e when we change in age then useEffect called. if there is
  },[age]) // is change in count then useEffect not called bcoz we pass age in [age] 

  return (
    <>
    <h1>useEffect Hook</h1>
    <p>{count}</p>
    <p>{age}</p>
    <button onClick={myFunc}>Just Click</button> &nbsp; &nbsp;
    <button onClick={myFunc1}>Click</button>
    </>
  )
}
