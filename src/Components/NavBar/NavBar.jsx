import React, { useEffect } from 'react'
import './NavBar.css'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react'
import { BiSolidBell } from "react-icons/bi";
import axios from 'axios';
import { API_KEY } from '../../Constants/Constants';

function NavBar() {
  const [searchItems,setSearchItems]=useState('')
   const [filteredMovies,setFilteredMovies]=useState([])
   
   useEffect(()=>{
  const handleSearch=()=>{
    axios.get(`/search/multi?api_key=${API_KEY}&language=en-US&query=${searchItems}`)
  .then((response)=>{
      const movies = response.data.results;
      
      console.log(movies)
      const filtered = movies.filter((movie)=>
        movie.title.toLowerCase().includes(searchItems.toLowerCase())
     
  );
  setFilteredMovies(filtered);
   console.log("Search term:", searchItems);
      
    if (searchItems.trim()) {
    handleSearch();
  } else {
    setFilteredMovies([]);
  }
  })}
  },[searchItems])
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        <img className='avatar'src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="avatar" />
        <IoSearch className='search-icon'/>
        <input  type='text'className='search'placeholder='Search for movies...' value={searchItems} onChange={(e)=>setSearchItems(e.target.value)}/>
        <BiSolidBell className='bell' />
    </div>
    
  )

}
export default NavBar