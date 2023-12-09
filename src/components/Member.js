import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../css/Form.css";

const Member = ({ member, onClick }) => {
  const iconSize = 25;

  const handleEditOnClick = (selectedMember, type) => {
    type = "Edit";
    selectedMember = member;
    onClick(selectedMember, type);
  };

  const handleDeleteOnClick = (selectedMember, type) => {
    type = "Delete";
    selectedMember = member;
    onClick(selectedMember, type);
  };

  const handleRowOnClick = () => {
    console.log("The whole row wey!");
  };

  let content = (
    <tr onClick={handleRowOnClick}>
      <td>{member.firstname}</td>
      <td>{member.lastname}</td>
      <td>{member.phone}</td>
      <td>{member.DOB}</td>
      <td className="centered-cell">
        <AiOutlineEdit
          size={iconSize}
          title="Edit"
          onClick={handleEditOnClick}
        />{" "}
        {/* <RiDeleteBin6Line title="Delete" onClick={handleDeleteClick} /> */}
        <RiDeleteBin6Line
          size={iconSize}
          title="Delete"
          onClick={handleDeleteOnClick}
        />
      </td>
    </tr>
  );

  return <>{content}</>;
};

export default Member;
