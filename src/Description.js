import React from "react";
import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Description = ({ movies, match,history }) => {
  const movie = movies.find((el) => el.id===match.params.id);
  console.log(movie);

  return (
    <div >
        
      <Card>
        <Card.Header >{movie.title}</Card.Header>
        <Card.Body>
          <Card.Title>Description:</Card.Title>
          <Card.Text>{movie.desc}</Card.Text>
          <Card.Text>
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Card.Text>
          <Button variant="primary" onClick={()=>history.goBack()}>Go To The Other Movies</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Description;
