import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import './App.css'
import Banner from './Components/Banner/Banner.jsx';
import RowPost from './Components/RowPost/RowPost.jsx';
import { action,comedyMovies,documentaries,horrorMovies,originals, romanceMovies } from '../urls.js';


function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals}name='Netflix Originals'/>
      <RowPost url={action}name='Action' isSmall isSmallTag/>
      <RowPost url={comedyMovies}name='Comedy ' isSmall isSmallTag/>
      <RowPost url={horrorMovies}name='Horror' isSmall isSmallTag/>
        <RowPost url={romanceMovies}name='Romance' isSmall isSmallTag/>
      <RowPost url={documentaries}name='Documentaries' isSmall isSmallTag/>
    </div>
  );
}

export default App