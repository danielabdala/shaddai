import React, { useEffect, useState } from "react";
import Member from "./Member";
import AddMember from "./AddMember";
import EditMember from "./EditMember";
import ViewMember from "./ViewMember";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DeleteMemberConfirmation from "./DeleteMemberConfirmation";
import "../css/Form.css";

const MemberListShow = ({ members, onAdd, onEdit, onDelete }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});

  const handleSelectedRow_OnClick = (member, type) => {
    setSelectedMember(member);

    if (type === "Delete") {
      console.log("Im here in view type 2!! You made it");
      console.log("b4:", showDeleteModal);
      setShowDeleteModal(!showDeleteModal);
      console.log("now:", showDeleteModal);
    }

    if (type === "Edit") {
      setShowEditForm(!showEditForm);
    }

    if (type === "View") {
      console.log("Im here in view type 2!! You made it");
      console.log("b4:", showDetailModal);
      setShowDetailModal(!showDetailModal);
      console.log("now:", showDetailModal);
    }
  };

  //***ADD FUNCTIONS ***//

  const handleAddForm_ShowOrHide = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddForm_OnSubmit = (newMember) => {
    setShowAddForm(false);
    onAdd(newMember);
  };

  //** MODALS **/

  const handleDetailModal_OnClose = () => {
    setShowDetailModal(!showDetailModal);
  };

  //***DELETE FUNCTIONS ***//

  const handleDeleteModal_OnSubmit = () => {
    onDelete(selectedMember);
    setShowDeleteModal(!showDeleteModal);
  };
  const handleDeleteModal_OnClose = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  //*****EDIT FUNCTIONS *****/

  const handleEditForm_OnCancel = () => {
    setShowEditForm(!showEditForm);
  };

  const handleEditForm_OnSubmit = (editedMember) => {
    setShowEditForm(false);
    onEdit(editedMember);
  };

  const renderedMembers = members.map((member) => {
    return (
      <Member
        key={member.id}
        member={member}
        onClick={handleSelectedRow_OnClick}
      />
    );
  });

  let delete_modal = (
    <DeleteMemberConfirmation
      show={showDeleteModal}
      onClose={handleDeleteModal_OnClose}
      onSubmit={handleDeleteModal_OnSubmit}
      member={selectedMember}
    ></DeleteMemberConfirmation>
  );

  let detail_modal = (
    <ViewMember
      show={showDetailModal}
      onClose={handleDetailModal_OnClose}
      member={selectedMember}
    ></ViewMember>
  );

  let main_content = (
    <div>
      {" "}
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
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Col>
                <Button variant="primary" onClick={handleAddForm_ShowOrHide}>
                  Add Member
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );

  let content;

  if (showDetailModal) {
    content = (
      <div>
        <Container>
          {main_content}
          {detail_modal}
        </Container>
      </div>
    );
  } else if (showDeleteModal) {
    content = (
      <Container>
        {main_content}
        {delete_modal}
      </Container>
    );
  } else {
    content = <Container>{main_content}</Container>;
  }
  //if user clicks the add button -> show the add form
  if (showAddForm)
    content = (
      <div>
        <AddMember
          show={showAddForm}
          onSubmit={handleAddForm_OnSubmit}
          onCancel={handleAddForm_ShowOrHide}
          members={members}
        ></AddMember>
      </div>
    );
  //if users clicks the edit button -> show edit form
  if (showEditForm)
    content = (
      <div>
        {/* {main_content} */}
        <EditMember
          show={showEditForm}
          onSubmit={handleEditForm_OnSubmit}
          onCancel={handleEditForm_OnCancel}
          member={selectedMember}
        ></EditMember>
      </div>
    );

  return (
    <div>
      <br />
      <br />
      {content}
    </div>
  );
};

export default MemberListShow;
