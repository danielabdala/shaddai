import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteMemberWarning = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      onHide={props.onClose}
      animation
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Delete member {props.member.firstname + " " + props.member.lastname}?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onSubmit}>
          Delete
        </Button>
        <Button onClick={props.onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteMemberWarning;
