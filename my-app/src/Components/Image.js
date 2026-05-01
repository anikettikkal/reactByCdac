import React from 'react'

export default function Image(props) {
  if (props.path===null){
    throw new Error("Image Path Is Null")
  }
  return (
    <>
    <img className='img-fluid' src={"https://image.tmdb.org/t/p/w500"+props.path} alt="movie poster" />
    </>
  )
}
