import React from 'react'
import Image from './Image'
import {Link} from "react-router-dom"

export default function Movie(props) {
  return (
    <>
    {props.record.map((movie)=>(
        <div className='col-3'>
            <Image path={movie.poster_path}></Image>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p><Link to={`/movie/${movie.id}`}>View Movie</Link></p>
        </div>
    ))}
    </>
  )
}
