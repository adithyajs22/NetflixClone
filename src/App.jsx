import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import './App.css'
import Banner from './Components/Banner/Banner.jsx';
import RowPost from './Components/RowPost/RowPost.jsx';
import { action,comedyMovies,documentaries,horrorMovies,originals, romanceMovies } from '../urls.js';
import { useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY } from './Constants/Constants.js';
import axios from 'axios';


function App() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const[urlId,setUrlId] = useState('')
   const[movies,setMovies] = useState('')
   const opts = {
      height: '450',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovies=(id)=>{
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
       .then((response)=>{
      console.log(response.data)
     if(response.data.results.length!== 0){
      setUrlId(response.data.results[0])}
      setMovies(id)
    })
    }
  return (
 <div className='app'>
  <NavBar setFilteredMovies={setFilteredMovies} />
  <Banner />
  {filteredMovies.length > 0 && (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="row-posts">
        {filteredMovies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleMovies(movie.id)}
            className="search-poster"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )}  
  <RowPost url={originals} name='Netflix Originals' />
  <RowPost url={action} name='Action' isSmall isSmallTag />
  <RowPost url={comedyMovies} name='Comedy' isSmall isSmallTag />
  <RowPost url={horrorMovies} name='Horror' isSmall isSmallTag />
  <RowPost url={romanceMovies} name='Romance' isSmall isSmallTag />
  <RowPost url={documentaries} name='Documentaries' isSmall isSmallTag />
</div>

  );
}

export default App