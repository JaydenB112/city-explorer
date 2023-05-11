import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import LocationForm from './LocationForm';
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [showName, setShowName] = useState([])
  const [displayString, setDisplayString] = useState('')  
  const [locationTing, setLocationTing] = useState('') 
  const [finishedURL, setFinishedURL]= useState('')
  let key = `pk.902568bedc8c71fb56e9015fafd54864`
  let responseData = axios.get(` https://us1.locationiq.com/v1/search?key=${key}&q=${displayString},&format=json`)
    .then(function (response) {
      console.log(response.data[0].display_name + response.data[0].lat + response.data[0].lon )
      setDisplayString(response.data[0].display_name + response.data[0].lat + response.data[0].lon)

      setLocationTing(response.data[0].lat + response.data[0].lon)
      let url = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${response.data[0].lat},${response.data[0].lon}`;
      // let finishedURL = url + 'key=' + key + '&center=' + locationTing;
      setFinishedURL(url);

      


    })

    
  return (

    <div className="App">
      <header className="App-header">
        <LocationForm  setDisplayString={setDisplayString} />
        
        <h3>{displayString}</h3>
        <img src={finishedURL} alt="Map image" />
      </header>
    </div>
  );
}

export default App;
