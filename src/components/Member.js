import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiShow } from "react-icons/bi";
import "../css/Form.css";

const Member = ({ member, onClick }) => {
  const iconSize = 25;

  const handleEditOnClick = () => {
    onClick(member, "Edit");
  };

  const handleDeleteOnClick = () => {
    console.log("Im here in delete type");
    onClick(member, "Delete");
  };

  const handleDetailsOnClick = () => {
    console.log("Im here in view type");
    onClick(member, "View");
  };

  let content = (
    <tr>
      <td>{member.firstname}</td>
      <td>{member.lastname}</td>
      <td>{member.phone}</td>
      <td>{member.DOB}</td>
      <td className="centered-cell">
        <div className="icon-grid">
          <BiShow
            size={iconSize}
            title="View Details"
            onClick={handleDetailsOnClick}
            className="icon"
          />
          <AiOutlineEdit
            size={iconSize}
            title="Edit"
            onClick={handleEditOnClick}
            className="icon"
          />
          <RiDeleteBin6Line
            size={iconSize}
            title="Delete"
            onClick={handleDeleteOnClick}
            className="icon"
          />
        </div>
      </td>
    </tr>
  );

  return <>{content}</>;
};

export default Member;
