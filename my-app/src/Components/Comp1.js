import React from 'react'
import Product from './Product'

export default function Comp1() {
  return (
    <>
    <div className="container">
        <h1>Props Concept</h1>
        <div className="row">
            <div className="col-3">
                <Product name="Product1" price="100" />
            </div>
            <div className="col-3">
                <Product name="Product2" price="200" />
            </div>
            <div className="col-3">
                <Product name="Product3" price="300" />
            </div>
            <div className="col-3">
                <Product name="Product4" price="400" />
            </div>
        </div>
    </div>
    </>
  )
}
