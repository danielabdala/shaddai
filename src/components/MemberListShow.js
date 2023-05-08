import React, {useEffect, useState} from 'react';
import Member from './Member'
import AddMember from './AddMember';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'; 
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const MemberListShow = ({members}) => {  

    const [numberOfRowsChecked, setNumberOfRowsChecked] = useState([])
    const [sumOfNumberOfRowsChecked, setSumOfNumberOfRowsChecked] = useState(0) 
    const [showAdd,setShowAdd ] = useState(false)
     
    useEffect(()=>{handleCheck()},[numberOfRowsChecked]) 

    const getAllCheckedRows = () =>

    {
        const updatedSumOfNumberOfRowsChecked = numberOfRowsChecked.filter((row) => {
            return row.checked === true
        });
        
        setSumOfNumberOfRowsChecked(updatedSumOfNumberOfRowsChecked.length) 
    }

    const handleDelete = () => {
        console.log("DELETE ME")
    }

    const handleAdd = () => {
        setShowAdd(!showAdd) 
        setNumberOfRowsChecked([]) //reset number of rows checked back to empty
    }

    const handleEdit = () => {
      
    } 

    const removeCheckedObjectByIndex = (indexToRemove) =>
    {
        const updatedCheckedRows = numberOfRowsChecked.filter((row,index) => {
            return index !== indexToRemove
        });
        
        setNumberOfRowsChecked(updatedCheckedRows) 
    } 
 
    const handleCheck = (checked,memberId) =>
    { 
        const latestOnCheckRow =  {checked:checked,memberId:memberId}   
        
        const updatedCheckedRows = [...numberOfRowsChecked, latestOnCheckRow]
        if (memberId !== undefined)
        {  setNumberOfRowsChecked(updatedCheckedRows) }

        const indexOfDuplicatedObject = numberOfRowsChecked.map(row => row.memberId).indexOf(memberId)  

        if(indexOfDuplicatedObject > -1) // If the object was already added, delete it and re add it with the latest properties
        {
            removeCheckedObjectByIndex(indexOfDuplicatedObject)
        }  

        getAllCheckedRows()
    }

    const renderedMembers = members.map((member) => 
    {    
      return ( 
      <Member key={member.id} member={member} onCheck={handleCheck}/> 
       )  
    } );   
 
    let editButtonDisabled = sumOfNumberOfRowsChecked !== 1 ? true : false

    let deleteButtonDisabled =( sumOfNumberOfRowsChecked >= 1  && sumOfNumberOfRowsChecked !== 0) ? false : true

    let content =  <> <Container>
        <Row>
        <Col></Col>
           <Col xs={8}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedMembers}
                </tbody>
            </Table>
            <Row>
                <Col></Col>
            <Col>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Col>
                        <Button variant="primary"  onClick={handleAdd}>Add Member</Button>{' '}
                        <Button variant="primary" onClick={handleEdit} disabled={editButtonDisabled}>Edit</Button>{' '}
                        <Button variant="danger" onClick={handleDelete} disabled={deleteButtonDisabled}>Delete</Button>
                    </Col>
                </Form.Group>
            </Form>
            </Col>
            <Col></Col>
            </Row>
           </Col>
          <Col></Col>
            </Row>
        </Container>  
        </>

 
    if(showAdd) 
        content =   <div>
                    <AddMember onCancel={handleAdd} members={members}></AddMember> 
                    </div> 

    return (
        <div>
          <br/>
          <br/> 
        {content}
    </div> 
    ) 
    
}

export default MemberListShow;