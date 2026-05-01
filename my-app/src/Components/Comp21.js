import React, { useRef, useState } from 'react'
import Comp22 from "./Comp22"
import mycontext from '../Contextapi';

export default function Comp21() {
    let [data, setData] = useState("");
    //let x1 = useRef();
    let x1 = React.createRef(); // another type of syntax

    function myfunction() {
        console.log(x1.current.value);
        setData(x1.current.value);
    }

    return (
        <>
            <input type="text" ref={x1} placeholder='Enter Data to Search' />
            <button onClick={myfunction}>Search</button>
            <mycontext.Provider value={data}>
                <Comp22 p1={data}></Comp22>
            </mycontext.Provider>
        </>
    )
}
