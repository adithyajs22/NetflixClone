import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import './App.css'
import Banner from './Components/Banner/Banner.jsx';
import RowPost from './Components/RowPost/RowPost.jsx';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App