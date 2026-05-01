import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import Image from './Image';
import ErrorBoundary from '../ErrorBoundry';

// https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US
// https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US
// c45a857c193f6302f2b5061c3b85e743
export default function SingleMovie() {
    let values = useParams();
    let [info, setInfo] = useState({});
    let [cast, setCast] = useState([]);
    console.log(values);
    useEffect(() => {
        let api1 = `https://api.themoviedb.org/3/movie/${values.id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;
        let api2 = `https://api.themoviedb.org/3/movie/${values.id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;
        axios.get(api1)
            .then((res) => {
                console.log(res);
                setInfo(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        axios.get(api2)
            .then((res) => {
                console.log(res);
                setCast(res.data.cast)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className='col-6'>
                        <Image path={info.poster_path} />
                    </div>
                    <div className='col-6'>
                        <h1>{info.title}</h1>
                        <p>{info.overview}</p>
                    </div>
                </div>

                <div className="row">
                    <h2>Cast Info</h2>
                    {cast.map((item) => (
                        <div className='col-2'>
                            <ErrorBoundary>
                                <Image path={item.profile_path} />
                            </ErrorBoundary>
                            <h4>{values.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
