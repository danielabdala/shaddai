import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddMember = () => 
{ 

    const STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
        
    let state_selection = STATES.map((state) => {
    return <option value="state">{state}</option>
});
        return <Container>
               <Row>
               <Col></Col>
               <Col  xs={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone number" /> 
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Enter DOB" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control type="text" placeholder="Apt #" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter City" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                                <Form.Select aria-label="Select State">
                                <option>Select State</option>
                               {state_selection}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter Zip Code" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>  
                </Form>
                </Col>
                <Col></Col>
                </Row>
        </Container>
    
// PONER BOTONS DE SUBMIT Y CANCEL
}

export default AddMember;

