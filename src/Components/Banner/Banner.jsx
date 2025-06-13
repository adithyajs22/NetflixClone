import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner '>
    <div className='content'>
      <h2 className="title">Money Heist</h2>
    
    <div className='buttons'>
      <button className="button">Play</button>
      <button className="button">My List</button>
    </div>
      <h2 className='description'>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</h2>
    </div>
    <div className="fadebtm"></div>
    </div>
  )
}

export default Banner