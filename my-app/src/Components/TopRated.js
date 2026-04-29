import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

export default function TopRated() {
  let [data, setData] = useState([]);

  useEffect(() => {
    let apiPath = `https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`;
    axios.get(apiPath)
      .then((res) => {
        console.log(res);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  return (
    <>
      <div className="container">
        <h1>Top-Rated Movies</h1>
        <div className="row">
          <Movie record={data}/>
        </div>
      </div>
    </>
  )
}
