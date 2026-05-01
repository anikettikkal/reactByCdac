import React from 'react'
import mycontext from '../Contextapi'

export default function Comp23() {
  let result = React.useContext(mycontext);
  return (
    <div>Comp23 : {result}</div>
  )
}
