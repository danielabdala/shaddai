import React from 'react';
import Form from 'react-bootstrap/Form';


const Member = ({member,onCheck}) =>
{  
     
    const handleClick = (event) =>
    { 
        onCheck(event.target.checked,member.id)  
        // console.log("event",event)
    }  
    
    let content =  
    <tr>
        <td>{member.id}</td>
        <td>{member.firstname}</td>
        <td>{member.lastname}</td>
        <td>{member.phone}</td>
        <td><Form.Check aria-label="option 1" onClick={handleClick}/></td>
    </tr> 
    
    return <>{content}</>;  
}

export default Member;