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
import DeleteMemberConfirmation from './DeleteMemberConfirmation';


const MemberListShow = ({members,onAdd, onEdit, onDelete}) => {  

  
    const [showAddForm,setShowAddForm ] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [rowToEdit, setRowToEdit] = useState({})
    const [rowToDelete, setRowToDelete] = useState([])

    //***ADD FUNCTIONS ***//
  
    const handleAddForm_ShowOrHide = () => {
        setShowAddForm(!showAddForm); 
    } 

    const handleAddForm_OnSubmit = (newMember) => { 
      
        setShowAddForm(false);
        onAdd(newMember); 
    }  

    //***DELETE FUNCTIONS ***//
    
    const handleShowDeleteForm = (member) =>
    {   
        setRowToDelete(member)
        console.log("row to be deleted:",rowToDelete)
        setShowDeleteModal(!showDeleteModal); 
    }

    const handleDeleteModal_OnSubmit = () =>
    {
        onDelete(rowToDelete)
        setShowDeleteModal(!showDeleteModal); 
     
    } 
    const handleDeleteModal_OnClose = () =>
    { 
        setShowDeleteModal(!showDeleteModal);
    }

    //*****EDIT FUNCTIONS *****/

    const handleShowEditForm = (member) => {
        
        setRowToEdit(member); // This sets the rowToEdit variable with the member value which is sent over as props to the EditMember Component 
        setShowEditForm(!showEditForm); //check if state can just be false directly 
    } 

    const handleEditForm_OnCancel = () => { 
        setShowEditForm(!showEditForm); //check if state can just be false directly  
    } 

    const handleEditForm_OnSubmit = (editedMember) => { 
 
        setShowEditForm(false); 
        onEdit(editedMember); 
    }  

    const renderedMembers = members.map((member) => 
    {    
      return ( 
      <Member key={member.id} member={member} onEdit={handleShowEditForm} onDelete={handleShowDeleteForm}/> 
       )  
    } );     
 

    let modal = <DeleteMemberConfirmation show={showDeleteModal} onClose={handleDeleteModal_OnClose} onSubmit={handleDeleteModal_OnSubmit}></DeleteMemberConfirmation> 

    let main_content =     
        <Row>
        <Col></Col>
           <Col xs={8}>
            <Table striped bordered hover>
                <thead>
                    <tr> 
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Birth Day</th>
                        <th>Actions</th>
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
                        <Button variant="primary" onClick={handleAddForm_ShowOrHide}>Add Member</Button>{' '} 
                    </Col>
                </Form.Group>
            </Form>
            </Col>
            <Col></Col>
            </Row>
           </Col>
          <Col></Col>
            </Row>
     
        

    let content = showDeleteModal ? <div><Container>{main_content}{modal}</Container></div>  :  <Container>{main_content}</Container> 
 
    //if user clicks the add button -> show the add form
    if(showAddForm) 
        content =   <div>
                        <AddMember onSubmit={handleAddForm_OnSubmit} onCancel={handleAddForm_ShowOrHide} members={members}></AddMember> 
                    </div> 

    //if users clicks the edit button -> show edit form 
    if(showEditForm) 
        content =   
                    <div>
                        <EditMember onSubmit={handleEditForm_OnSubmit} onCancel={handleEditForm_OnCancel} member={rowToEdit}></EditMember> 
                    </div>  
   
        
    return (
        <div> 
          <br/>
          <br/>
          <br/> 
                {content} 
        </div> 
    ) 
    
}

export default MemberListShow;