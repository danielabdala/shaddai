import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../css/Form.css";

const Member = ({ member, onEdit, onDelete }) => {
  const handledEditClick = () => {
    onEdit(member);
  };

  const handleDeleteClick = () => {
    onDelete(member);
  };

  let content = (
    <tr>
      <td>{member.firstname}</td>
      <td>{member.lastname}</td>
      <td>{member.phone}</td>
      <td>{member.DOB}</td>
      <td className="centered-cell">
        <AiOutlineEdit title="Edit" onClick={handledEditClick} />{" "}
        <RiDeleteBin6Line title="Delete" onClick={handleDeleteClick} />
      </td>
    </tr>
  );

  return <>{content}</>;
};

export default Member;
