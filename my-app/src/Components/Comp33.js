import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function Comp33(props) {
    const brandName = useSelector((state) => state.transfer.brand)
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/"+ props.p2)
        .then((res)=>{
            console.log(res.data);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[props.p2])

  return (
    <div>Comp33 : {props.p2} - Brand: {brandName}</div>
  )
}
