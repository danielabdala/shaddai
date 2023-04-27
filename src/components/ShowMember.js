import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import EditMember from './EditMember';
import Table from 'react-bootstrap/Table';

const ShowMember = ({member}) =>
{
 
    const [showEdit, setShowEdit] = useState(false)

    const onEdit = () =>
    {
        setShowEdit(!showEdit)
    }

    let content =  
    <tr>
        <td>{member.id}</td>
        <td>{member.firstname}</td>
        <td>{member.lastname}</td>
        <td>{member.phone}</td>
        <td><Button onClick={onEdit} size="sm"> Edit </Button></td>
    </tr> 

    if(showEdit)
    {
        content = <EditMember member={member}/>
    }
    return ( 
            <>
            {content}
            </>
               
    )   
      
}

export default ShowMember;