import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteMemberConfirmation = (props) => {
  console.log(props.member);
  console.log(props.member.firstname);
  return (
    <Modal
      {...props}
      size="sm"
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
          Are you sure you want to delete this member:{" "}
          {props.member.firstname + " " + props.member.lastname}?
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

export default DeleteMemberConfirmation;
