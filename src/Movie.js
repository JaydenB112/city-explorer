import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Card } from 'react-bootstrap'
import React from 'react';

function Movies(props) {
    return (
      < div className='Card'>
        {props.movieProp.map((movie) => (
          <Card key={movie.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.poster_path} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }

export default Movies;