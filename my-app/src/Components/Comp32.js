import React from 'react'
import { useDispatch } from 'react-redux';
import { setBrand } from '../redux/slices/DatatransferSlice';


export default function Comp32(props) {
  let dispatch = useDispatch()
  
    function myfunction1(e){
        console.log(e.target.innerText);
        dispatch(setBrand(e.target.innerText))
        //props.p1(e.target.innerText);
    }
    function myfunction(e){
        console.log(e.target.innerText);
        props.p1(e.target.innerText);
    }

  return (
    <>
    <ul>
        <li onClick={myfunction} >electronics</li>
        <li onClick={myfunction}>jewelery</li>
    </ul>
    <ul>
        <li onClick={myfunction1} >Motrola</li>
        <li onClick={myfunction1}>Samsung</li>
    </ul>
    </>
  )
}
