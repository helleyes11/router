import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AddMovie from './AddMovie';

import MovieCard from './MovieCard'

const MovieList =({movies,addMovie}) =>{
  const [show,setShow]= useState(false);
  const handleClose =() => setShow(false);
  const handleShow =()=>setShow(true);

  return (
    <div style={{display:'flex',gap:'8px'}} >
      <AddMovie addMovie={addMovie} show={show} handleClose={handleClose}></AddMovie>
      {movies.map(el=> <Link to={`/description/${el.id}`}> <MovieCard key={el.id} movie={el}></MovieCard></Link>)}
      <br/>
      <button onClick={handleShow}>Add a Movie</button>
     
    </div>
  )
}

export default MovieList

