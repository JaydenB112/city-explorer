import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function LocationForm(props) {
    const [inputValue, setInputValue] = useState("")
    //we want this function to console.log the input
    //right now, it is setting the input to to the state
    // so essentially I'm skipping a step?
    // literally just console log it in that function huh?
    // tuff.
    // So it just console logs every keystroke at this point?
    function handleInputChange(event) {
        console.log(event.target.value)
        setInputValue(event.target.value)
    };
    function logInput() {
        props.setDisplayString(inputValue)
        console.log(inputValue)
    };

    return (
        // let location = `pk.902568bedc8c71fb56e9015fafd54864`

        <>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type={inputValue} onChange={handleInputChange} placeholder='Where are you going?'></Form.Control>
                <Button variant='primary' onClick={logInput} type='submit'>Explore!</Button>
            </Form.Group>

        </>

    )
    // function handleInputChange(event){
    //     setInputValue(event.target.value)
    // };
    // function logInput(){
    // console.log(inputValue)
    // };
}

export default LocationForm;