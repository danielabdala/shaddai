import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const DeleteMemberConfirmation = ({ show, member, onClose }) => {
  return (
    <Modal
      show={show}
      size="md"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> {member.firstname + " " + member.lastname} has been deleted</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant="success">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteMemberConfirmation;
