import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieCard =({movie}) => {
  return (
    <div >
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.img} height='300px' />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text style={{height:'250px'}}>
     {movie.desc}
    </Card.Text>
    <ReactStars 
    count={5}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
   
  />
    <Button variant="primary">View More</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard


