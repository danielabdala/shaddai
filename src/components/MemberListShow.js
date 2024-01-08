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
import DeleteMemberWarning from "./DeleteMemberWarning";
import EditMemberConfirmation from "./EditMemberConfirmation";
import AddMemberConfirmation from "./AddMemberConfirmation";
import "../css/Form.css";

const MemberListShow = ({ members, onAdd, onEdit, onDelete }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showAddConfirmation, setShowAddConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [newMember, setNewMember] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const handleSelectedRow_OnClick = (member, type) => {
    setSelectedMember(member);

    if (type === "Delete") {
      setShowDeleteWarning(!showDeleteWarning);
    }

    if (type === "Edit") {
      setShowEditForm(!showEditForm);
    }

    if (type === "View") {
      console.log("Im here in view type 2!! You made it");
      console.log("b4:", showDetail);
      setShowDetail(!showDetail);
      console.log("now:", showDetail);
    }
  };

  //***ADD FUNCTIONS ***//

  const handleAddForm_ShowOrHide = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddForm_OnSubmit = (newMember) => {
    setShowAddForm(false);
    onAdd(newMember);
    setNewMember(newMember);
    setShowAddConfirmation(!showAddConfirmation);
  };

  const handleAddConfirmationWarning_OnCloseOrOnSubmit = () => {
    setShowAddConfirmation(!showAddConfirmation);
  };

  //** MODALS **/

  const handleDetailModal_OnClose = () => {
    setShowDetail(!showDetail);
  };

  //***DELETE FUNCTIONS ***//

  const handleDeleteWarning_OnSubmit = () => {
    onDelete(selectedMember);
    setShowDeleteWarning(!showDeleteWarning);
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };
  const handleDeleteWarning_OnClose = () => {
    setShowDeleteWarning(!showDeleteWarning);
  };

  const handleDeleteConfirmationWarning_OnCloseOrOnSubmit = () => {
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };

  //*****EDIT FUNCTIONS *****/

  const handleEditForm_OnCancel = () => {
    setShowEditForm(!showEditForm);
  };

  const handleEditForm_OnSubmit = (editedMember) => {
    setShowEditForm(false);
    onEdit(editedMember);
    setShowEditConfirmation(!showEditConfirmation);
  };

  const handleEditConfirmationWarning_OnCloseOrOnSubmit = () => {
    setShowEditConfirmation(!showEditConfirmation);
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

  let addConfirmation = (
    <AddMemberConfirmation
      show={showAddConfirmation}
      onClose={handleAddConfirmationWarning_OnCloseOrOnSubmit}
      onSubmit={handleAddConfirmationWarning_OnCloseOrOnSubmit}
      member={newMember}
    ></AddMemberConfirmation>
  );

  let detailModal = (
    <ViewMember
      show={showDetail}
      onClose={handleDetailModal_OnClose}
      member={selectedMember}
    ></ViewMember>
  );

  let editConfirmation = (
    <EditMemberConfirmation
      show={showEditConfirmation}
      onClose={handleEditConfirmationWarning_OnCloseOrOnSubmit}
      onSubmit={handleEditConfirmationWarning_OnCloseOrOnSubmit}
    ></EditMemberConfirmation>
  );

  let deleteConfirmation = (
    <DeleteMemberConfirmation
      show={showDeleteConfirmation}
      member={selectedMember}
      onClose={handleDeleteConfirmationWarning_OnCloseOrOnSubmit}
      onSubmit={handleDeleteConfirmationWarning_OnCloseOrOnSubmit}
    ></DeleteMemberConfirmation>
  );

  let deleteWarning = (
    <DeleteMemberWarning
      show={showDeleteWarning}
      onClose={handleDeleteWarning_OnClose}
      onSubmit={handleDeleteWarning_OnSubmit}
      member={selectedMember}
    ></DeleteMemberWarning>
  );

  let editForm = (
    <EditMember
      show={showEditForm}
      onSubmit={handleEditForm_OnSubmit}
      onCancel={handleEditForm_OnCancel}
      member={selectedMember}
    ></EditMember>
  );

  let addForm = (
    <AddMember
      show={showAddForm}
      onSubmit={handleAddForm_OnSubmit}
      onCancel={handleAddForm_ShowOrHide}
      members={members}
    ></AddMember>
  );

  let mainContent = (
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

  let content = showDeleteWarning ? (
    <div>
      <Container>
        {mainContent}
        {deleteWarning}
        {showDeleteConfirmation && deleteConfirmation}
      </Container>
    </div>
  ) : (
    <Container>
      {mainContent}
      {showDeleteConfirmation && deleteConfirmation}
    </Container>
  );

  //if user clicks the add button -> show the add form
  if (showAddForm)
    content = (
      <div>
        <Container>
          {mainContent}
          {addForm}
          {showAddConfirmation && addConfirmation}
        </Container>
      </div>
    );
  //if users clicks the edit button -> show edit form
  if (showEditForm)
    content = (
      <div>
        <Container>
          {mainContent}
          {editForm}
          {showEditConfirmation && editConfirmation}
        </Container>
      </div>
    );

  return (
    <div>
      <br />
      <br />
      {content}
      {showEditConfirmation && editConfirmation}
      {showAddConfirmation && addConfirmation}
      {showDetail && detailModal}
    </div>
  );
};

export default MemberListShow;
