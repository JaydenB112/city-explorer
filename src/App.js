import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import LocationForm from './LocationForm';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [showName, setShowName] = useState([])
  const [displayString, setDisplayString] = useState('test')   
  let responseData = axios.get(' https://us1.locationiq.com/v1/search?key=pk.902568bedc8c71fb56e9015fafd54864&q=Memphis,TN&format=json')
    .then(function (response) {
      console.log(response.data[0].display_name + response.data[0].lat + response.data[0].lon )
      setDisplayString(response.data[0].display_name + response.data[0].lat + response.data[0].lon)

    })
  return (

    <div className="App">
      <header className="App-header">
        <LocationForm />

      <h3>{displayString}</h3>
      </header>
    </div>
  );
}

export default App;
