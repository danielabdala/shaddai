import React, {useEffect, useState} from 'react';
import Member from './Member'
import AddMember from './AddMember';
import EditMember from './EditMember';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'; 
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 


const MemberListShow = ({members,onAdd, onEdit}) => {  

    const [numberOfRowsChecked, setNumberOfRowsChecked] = useState([])
    const [sumOfNumberOfRowsChecked, setSumOfNumberOfRowsChecked] = useState(0) 
    const [showAddForm,setShowAddForm ] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [selectedRowForEditing, setSelectedRowForEditing] = useState({})
     
    useEffect(()=>{handleCheck()},[numberOfRowsChecked]) 

    const getAllCheckedRows = () =>

    {
        const updatedSumOfNumberOfRowsChecked = numberOfRowsChecked.filter((row) => {
            return row.checked === true;
        });
        
        setSumOfNumberOfRowsChecked(updatedSumOfNumberOfRowsChecked.length) 
        // selectedRowForEditing(sumOfNumberOfRowsChecked)
    }

    const handleDelete = () => {
        console.log("DELETE ME");
    }

    const resetCheckBoxes = () =>
    {
        setNumberOfRowsChecked([]); //reset number of rows checked back to empty
    }

    //this function is called whenever the add button is clicked or when inside the add form, the cancel button is clicked
    const handleShowAddForm = () => {
        setShowAddForm(!showAddForm); 
        resetCheckBoxes(); 
    } 

    const handleSubmitAddForm = (newMember) => { 
      
        setShowAddForm(false);
        resetCheckBoxes();
        onAdd(newMember); 
    }

    const handleSelectedRowForEditing = () => { 
       
        let selectedRow = {}
           
        members.filter(member => member.id === numberOfRowsChecked[0].memberId).map(member => selectedRow = member)  
        setSelectedRowForEditing(selectedRow) 
    }

    const handleShowEditForm = () => {
        
        handleSelectedRowForEditing()
        setShowEditForm(!showEditForm); //check if state can just be false directly 
        resetCheckBoxes(); 
    }

    const handleShowEditForm_OnCancel = () => {
         
        setShowEditForm(!showEditForm); //check if state can just be false directly 
        resetCheckBoxes(); 
    } 

    const handleSubmitEditForm = (editedMember) => {
       
        console.log("Hi, Im here now lol")
        setShowEditForm(false);
        resetCheckBoxes();
        onEdit(editedMember); 
    } 

    const removeCheckedObjectByIndex = (indexToRemove) =>
    {
        const updatedCheckedRows = numberOfRowsChecked.filter((row,index) => {
            return index !== indexToRemove;
        });
        
        setNumberOfRowsChecked(updatedCheckedRows); 
    } 
 
    const handleCheck = (checked,memberId) =>
    { 
        const latestOnCheckRow = {checked:checked,memberId:memberId};    

        const updatedCheckedRows = [...numberOfRowsChecked, latestOnCheckRow];
        if (memberId !== undefined)
        {  setNumberOfRowsChecked(updatedCheckedRows); }

        const indexOfDuplicatedObject = numberOfRowsChecked.map(row => row.memberId).indexOf(memberId);  

        if(indexOfDuplicatedObject > -1) // If the object was already added, delete it and re add it with the latest properties
        {
            removeCheckedObjectByIndex(indexOfDuplicatedObject);
        }   
        getAllCheckedRows()   
    }

    const renderedMembers = members.map((member) => 
    {    
      return ( 
      <Member key={member.id} member={member} onCheck={handleCheck}/> 
       )  
    } );   

    console.log("selectedRowForEditing",selectedRowForEditing)
 
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
                        <Button variant="primary" onClick={handleShowAddForm}>Add Member</Button>{' '}
                        <Button variant="primary" onClick={handleShowEditForm} disabled={editButtonDisabled}>Edit</Button>{' '}
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

    //if user clicks the add button -> show the add form
    if(showAddForm) 
        content =   <div>
                    <AddMember onSubmit={handleSubmitAddForm} onCancel={handleShowAddForm} members={members}></AddMember> 
                    </div> 

    //if users clicks the edit button -> show edit form 
    if(showEditForm) 
    content =   <div>
                <EditMember onSubmit={handleSubmitEditForm} onCancel={handleShowEditForm_OnCancel} member={selectedRowForEditing}></EditMember> 
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