import React from 'react'
import Comp23 from './Comp23'
import Comp24 from "./Comp24"

export default function Comp22(props) {
  return (
    <>
    <div className="row">
      <div className="col-3 border border-dark p-3">
        <Comp23></Comp23>
      </div>
      <div className="col-9 border border-dark p-3">
        <Comp24 p2={props.p1}></Comp24>
      </div>
    </div>
    </>
  )
}
