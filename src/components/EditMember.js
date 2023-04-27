import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 const EditMember = ({member}) => {

    console.log(member)
    return (  
        
        <Form>
            <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder={member.firstname + " " + member.lastname} value={member.firstname + " " + member.lastname} />
            </Form.Group> 
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
     
        )
    
}

export default EditMember;