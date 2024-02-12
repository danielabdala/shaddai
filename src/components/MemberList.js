import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Member from "./Member";

const MemberList = ({ members, onAddButtonClick, onRowActionClick }) => {
  const handleAdd = () => {
    onAddButtonClick();
  };

  const renderedMembers = members.map((member) => {
    return (
      <Member key={member.id} member={member} onClick={onRowActionClick} />
    );
  });

  return (
    <>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="centered-cell">First Name</th>
                <th className="centered-cell">Last Name</th>
                <th className="centered-cell">Phone Number</th>
                <th className="centered-cell">Birth Day</th>
                <th className="centered-cell">Actions</th>
              </tr>
            </thead>
            <tbody>{renderedMembers}</tbody>
          </Table>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={2}>
          <Col>
            <Button variant="primary" onClick={handleAdd}>
              Add Member
            </Button>
          </Col>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default MemberList;
