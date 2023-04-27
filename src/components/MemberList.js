import React from 'react';
import ShowMember from './ShowMember'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MemberList = ({members}) => {  

  const onAdd = () => {
    console.log("Hey there, you are adding stuff here!")

    
}   
    const renderedMembers = members.map((member) => 
    {  
      
      return ( 
      <ShowMember key={member.id} member={member}/> 
       ) 
      
    } );  
     
    return (
    <Container>
       <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderedMembers}
            </tbody>
        </Table> 
    </Container>
    ) 
    
}

export default MemberList;