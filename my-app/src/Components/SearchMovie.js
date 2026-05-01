import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import axios from 'axios'
import Movie from './Movie';

export default function SearchMovie() {
  let [data, setData] = React.useState([]);
  let answer = useSelector((state) => state.transfer.movieName);
  let apipath = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${answer}&page=1`

  useEffect(() => {
    axios.get(apipath)
      .then((res) => {
        console.log(res.data);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);

      })
  }, [answer]);
  return (
    <>
      <div>SearchMovie</div>
      <h2>{answer}</h2>
      <div className="row">
        <Movie record={data} />
      </div>
    </>
  )
}
