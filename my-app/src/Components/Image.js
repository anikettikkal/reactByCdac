import React from 'react'

export default function Image(props) {
  return (
    <>
    <img className='img-fluid' src={"https://image.tmdb.org/t/p/w500"+props.path} alt="movie poster" />
    </>
  )
}
