import React,{useState,useEffect, use} from 'react'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import YouTube from 'react-youtube';

function RowPost(props) {

    const [originals, setOriginals] = useState([])
     const [urlId, setUrlId] = useState('')
    const [movies, setMovies] = useState('')
  useEffect(()=>{
    axios.get(props.url)
    .then((response)=>{
      
      setOriginals(response.data.results)
    })
  
  },[])
  
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

    <div className='row'>
      <h2>{props.name}</h2>
      <div className="posters">
        {originals.map((obj) => (
          <div className="poster-container" key={obj.id}>
            <img
              
              onClick={() => handleMovies(obj.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl + obj.backdrop_path}`}
              alt={obj.title }
            />{movies==obj.id&&
            <div className={props.isSmallTag?'smalltag':'tag'}>Now Playing...</div>}
            <div className="poster-title">
              {obj.title || obj.name}
            </div>
          </div>
        ))}
      </div>

      {urlId && (
       
          <YouTube videoId={urlId.key} opts={opts} />

     
    )}
    </div>
  );
}

export default RowPost;