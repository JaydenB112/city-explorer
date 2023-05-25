import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import LocationForm from './LocationForm';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap'
import Weather from './Weather'
import Movie from './Movie'

function App(props) {
  const [showName, setShowName] = useState([])
  const [displayString, setDisplayString] = useState('')
  const [locationTing, setLocationTing] = useState('')
  const [finishedURL, setFinishedURL] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [movieData, setMovieData] = useState([])
  const [show, setShow] = useState(false)

  function handleClose() {
    setShow(false)
  }

  let key = `pk.902568bedc8c71fb56e9015fafd54864`
  useEffect(() => {
    if (displayString !== "") {
      console.log("Hello")
      let responseData = axios.get(`https://us1.locationiq.com/v1/search?key=${key}&q=${displayString},&format=json`)
        .then(function (response) {
          console.log(response.data[0].display_name + response.data[0].lat + response.data[0].lon)
          setLocationTing(response.data[0].display_name + response.data[0].lat + response.data[0].lon)
          let backendLink = axios.get(`http://localhost:3002/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&searchQuery=${displayString}`)
            .then(function(response){
                setWeatherData(response.data)
            })
            let movieURL = axios.get(`http://localhost:3002/movies?movie=${displayString}`)
              .then(function(response){
                console.log(response.data)
                setMovieData(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
          // setLocationTing(response.data[0].lat + response.data[0].lon)
          let url = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${response.data[0].lat},${response.data[0].lon}`;
          console.log("url", url)
          setFinishedURL(url);
        }).catch((error) => {
          setShow(true)
        })
    }
  }, [displayString, key])
  
 


  return (

    <div className="App">
      <header className="App-header">
        <LocationForm setDisplayString={setDisplayString} />

        <h3>{locationTing}</h3>
        <Weather forecastData={weatherData}/>
        <img src={finishedURL} alt="Map image" />

        <Movie movieProp ={movieData}/>
      </header>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dang Man</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please Enter a Valid Location</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* <Card show ={show} style={{ width: '18rem' }} onHide={function(){
        setShow(false) */}
      {/* }}> */}
      {/* <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Sorry Pal</Card.Title>
        <Card.Text>
          Aye Man You Fucked Up!
        </Card.Text>
      </Card.Body>
    </Card>
  */}
    </div>

  );
}

export default App;
