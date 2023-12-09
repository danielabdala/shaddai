import React, { useState } from "react";
import MemberListShow from "./components/MemberListShow";
import NavBar from "./components/NavBar";

const App = () => {
  const temp_members = [
    {
      id: Math.round(Math.random() * 9999), //assign random id to member's id
      firstname: "Daniel",
      lastname: "Abdala",
      DOB: "1986-08-22",
      phone: "813-992-3920",
      address1: "2166 Broadway View Ave",
      address2: "around",
      city: "Tampa",
      state: "FL",
      zipcode: "33510",
      isMember: true,
    },
    {
      id: Math.round(Math.random() * 9999), //assign random id to member's id
      firstname: "Melisa",
      lastname: "Anchique",
      DOB: "1989-10-31",
      phone: "813-992-3920",
      address1: "2166 Broadway View Ave",
      address2: "around",
      city: "Tampa",
      state: "FL",
      zipcode: "33510",
      isMember: true,
    },
    {
      id: Math.round(Math.random() * 9999), //assign random id to member's id
      firstname: "Elmer",
      lastname: "Cruz",
      DOB: "2004-06-31",
      phone: "813-992-3920",
      address1: "The ghetto",
      address2: "around",
      city: "Tampa",
      state: "FL",
      zipcode: "33510",
      isMember: true,
    },
    {
      id: Math.round(Math.random() * 9999), //assign random id to member's id
      firstname: "Laura",
      lastname: "Anchique",
      DOB: "1993-06-31",
      phone: "813-992-3920",
      address1: "Seattle",
      address2: "around",
      city: "Tampa",
      state: "FL",
      zipcode: "33510",
      isMember: true,
    },
  ];

  const [members, setMembers] = useState(temp_members);

  const handleAdd = (newMember) => {
    const updatedMembers = [...members, newMember];
    setMembers(updatedMembers);

    return;
  };

  const handleEdit = (editedMember) => {
    const updatedMembers = members.map((member) => {
      if (member.id === editedMember.id) {
        return { ...editedMember };
      }
      return member;
    });

    setMembers(updatedMembers);
  };

  const handleDelete = (memberToDelete) => {
    const updatedMembers = members.filter((member) => {
      return member.id !== memberToDelete.id;
    });
    setMembers(updatedMembers);
  };

  return (
    <>
      <NavBar />
      <MemberListShow
        members={members}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
