import React, { useEffect } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import { useState } from 'react'


function Banner() {
  const [movie,setMovie]= useState();

  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      console.log(response.data.results)
      const movies = response.data.results;
      const randomMovies = Math.floor(Math.random() * movies.length)
      setMovie(movies[randomMovies])
  })
  }, [])
  
 

  return (
    
    <div className='banner '
    style={{backgroundImage:`url(${imageUrl+movie?.backdrop_path})`}}>
      
    <div className='content'>
      <h2 className="title">{movie?.title}</h2>
    
    <div className='buttons'>
      <button  className="button">Play</button>
      <button className="button">My List</button>
    </div>
      <h2 className='description'>{movie?.overview}</h2>
    </div>
    <div className="fadebtm"></div>
    </div>
  )
}

export default Banner