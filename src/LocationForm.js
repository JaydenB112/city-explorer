import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
    function locationForm() {
        return (
            // let location = `pk.902568bedc8c71fb56e9015fafd54864`
            <Form>
                <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='text' placeholder='Where are you going?'></Form.Control>
                    <Button variant='primary' type='submit'>Explore!</Button>
                </Form.Group>
            </Form>
        )
    }

    export default locationForm;