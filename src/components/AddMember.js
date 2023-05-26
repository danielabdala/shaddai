import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
 
const AddMember = ({onCancel,onSubmit,members,show}) => 
{ 

    const [currentMembers, setCurrentMembers] = useState(members)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [dob, setDob] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('') 

    const handleCancel = () =>
    {
        onCancel() //goes back to membershowlist module
    }

    const handleFirstNameChange = (event) =>
    { 
        setFirstName(event.target.value) 
    }

    const handleLastNameChange = (event) =>
    {
        setLastName(event.target.value) 
    }

    const handlePhoneNumberChange = (event) =>
    {
        setPhoneNumber(event.target.value) 
    }
    const handleDobChange= (event) =>
    {
        setDob(event.target.value) 
    }
    const handleAddressLine1Change = (event) =>
    {
        setAddressLine1(event.target.value)
    }
    const handleAddressLine2Change = (event) =>
    {
        setAddressLine2(event.target.value)
    }
    const handleCityChange = (event) =>
    {
        setCity(event.target.value)
    }
    const handleStateChange = (event) =>
    { 
        setState(event.target.value)  
    }
    const handleZipChange = (event) =>
    {
        setZip(event.target.value)
    } 
    
    const handleSubmit = (event) => { 
        
        event.preventDefault();

        const newMember = { 
            id:Math.round(Math.random() * 9999), //assign random id to member's id
            firstname:firstName,
            lastname:lastName,
            DOB:dob,
            phone:phoneNumber,
            address1:addressLine1,
            address2:addressLine2,
            city:city,
            state:state,
            zipcode:zip,
            isMember:true
        }
  
        const updatedMembers = [...currentMembers, newMember]  
        setCurrentMembers(updatedMembers) 
        onSubmit(newMember) // it executes call back function in app module which update members state
         
    }
 
    const STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
        
    let state_selection = STATES.map((state) => {
    return <option key={state} value={state}>{state}</option>
});

   
    return  <Modal animation size="lg" show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
    <Container>
               <Row>
               <Col></Col>
               <Col xs={10}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={firstName} onChange={handleFirstNameChange} placeholder="Enter first name" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={lastName} onChange={handleLastNameChange} placeholder="Enter last name" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Enter phone number" /> 
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" value={dob} onChange={handleDobChange} placeholder="Enter DOB" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control type="text" value={addressLine1} onChange={handleAddressLine1Change} placeholder="Enter Address" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control type="text" value={addressLine2} onChange={handleAddressLine2Change} placeholder="Apt #" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={city} onChange={handleCityChange} placeholder="Enter City" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                                <Form.Select onChange={handleStateChange} value={state} aria-label="Select State">
                                <option>Select State</option>
                               {state_selection}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" value={zip} onChange={handleZipChange} placeholder="Enter Zip Code" />
                                <Form.Text className="text-muted"> 
                                </Form.Text>
                            </Form.Group>   
                            {/* <Form.Group as={Row} className="mb-3">
                            <Col></Col>
                                <Col xs={8}> 
                                <Button type="submit" variant="primary">Add</Button>{' '}  
                                <Button variant="danger" onClick={handleCancelClick}>Cancel</Button> 
                                </Col> 
                            </Form.Group> */}
                </Form> 
                </Col>
                <Col> 
                </Col>
                </Row>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
 
}

export default AddMember;

  