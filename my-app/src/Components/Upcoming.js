import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

export default function Upcoming() {
    let [data , setData]=useState([]);

    useEffect(() => {
        let apiPath = `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`;
        axios.get(apiPath)
        .then((res) => {
        console.log(res);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    },[])
    return (
        <>
        <div className="container">
            <h1>Upcoming Movies</h1>
            <div className="row">
                <Movie record={data}/>
            </div>
        </div>
        </>
    )
}
