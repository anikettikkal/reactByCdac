import React, { useState } from 'react'

export default function Comp2() {
    let [count, setCount] = useState(100);
    let [brands, setBrands] = useState(["samsung", "Motrola", "oneplus"])

    function myFunc() {
        setCount(count + 10);
        setBrands(["Vivox80", "googlePixel", "Moto60Fusion"])
    }
    return (
        <>
            <h1>State</h1>
            <p>{count}</p>
            <ul>
                <li>{brands[0]}</li>
                <li>{brands[1]}</li>
                <li>{brands[2]}</li>
            </ul>
            <ul>
                {brands.map((brand) => (
                    <li key={brand}>{brand}</li>
                ))}
            </ul>
            <div className='row'>
                {brands && brands.map((brand) => (
                    <div key={brand}>{brand}</div>
                ))}
            </div>
            <button onClick={myFunc}>Change Data</button>
        </>
    )
}
