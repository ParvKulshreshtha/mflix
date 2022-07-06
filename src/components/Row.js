import React,{useState, useEffect} from 'react'
import axios from "../axios"
import { RowItem } from './RowItem';

import "./Row.css"

export const Row = (props) => {
  const [movies, setMovies] = useState("");
  useEffect(() => {
    async function fetchData(){
        const request = await axios.get(props.fetchUrl)
        console.log(request.data.results)
        setMovies(request.data.results)
        return request;
    }
    fetchData();
  }, [props.fetchUrl])

  
  const row = Object.keys(movies).map((movie,i)=>(
  <RowItem movie={movies[movie]} key={i}/>));
  return (
    <>
        <h1>{props.title}</h1>
        <div className="row">
          {row}
        </div>
    </>  
  )
}
