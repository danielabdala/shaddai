import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const EditMemberConfirmation = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      size="md"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your changes have been saved.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant="success">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditMemberConfirmation;
