import React from 'react';
import Comp32 from './Comp32';
import Comp33 from './Comp33';

export default function Comp31() {
    let [data,setData] = React.useState("");
    function parentfunction(value){
        console.log("Hello From Parent Function",value);
        setData(value);
    }
  return (
    <>
    <div>Comp31</div>
    <div className="row">
        <div className="col-3">
            <Comp32 p1={parentfunction}></Comp32>
        </div>
        <div className="col-9">
            <Comp33 p2={data}></Comp33>
        </div>
    </div>
    </>
  )
}
