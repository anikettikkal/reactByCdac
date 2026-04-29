import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowUser() {
  let [data, setData] = useState(); // we can not return the data come from api so we can use useState variable to store this
  useEffect(() => {
    axios.get("http://localhost:9000/api/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  return (
    <>
      <h1>Show Users</h1>
      <div className="row">
        {data && data.map((item) => (
          <div className='col-3'>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <h3>{item.discount}</h3>
            <h4>{item.description}</h4>
          </div>
        ))}
      </div>
    </>
  )
}
