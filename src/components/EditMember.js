import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const EditMember = ({ onCancel, onSubmit, member, show }) => {
  const [firstName, setFirstName] = useState(member.firstname);
  const [lastName, setLastName] = useState(member.lastname);
  const [phoneNumber, setPhoneNumber] = useState(member.phone);
  const [dob, setDob] = useState(member.DOB);
  const [addressLine1, setAddressLine1] = useState(member.address1);
  const [addressLine2, setAddressLine2] = useState(member.address2);
  const [city, setCity] = useState(member.city);
  const [state, setState] = useState(member.state);
  const [zip, setZip] = useState(member.zipcode);

  const handleCancel = () => {
    onCancel(); //goes back to membershowlist module
    return;
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleDobChange = (event) => {
    setDob(event.target.value);
  };
  const handleAddressLine1Change = (event) => {
    setAddressLine1(event.target.value);
  };
  const handleAddressLine2Change = (event) => {
    setAddressLine2(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedMember = {
      id: member.id, //use same id
      firstname: firstName,
      lastname: lastName,
      DOB: dob,
      phone: phoneNumber,
      address1: addressLine1,
      address2: addressLine2,
      city: city,
      state: state,
      zipcode: zip,
      isMember: member.isMember,
    };
    onSubmit(updatedMember); // it executes call back function in app module which update members state
  };

  const STATES = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  let state_selection = STATES.map((state) => {
    return (
      <option key={state} value={state}>
        {state}
      </option>
    );
  });

  return (
    <Modal animation size="lg" show={show} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={10}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">First Name</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      placeholder={firstName}
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Last Name</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={handleLastNameChange}
                      placeholder="Enter last name"
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Phone Number</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="Enter phone number"
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Date of Birth</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="date"
                      value={dob}
                      onChange={handleDobChange}
                      placeholder="Enter DOB"
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Address Line 1</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      value={addressLine1}
                      onChange={handleAddressLine1Change}
                      placeholder="Enter Address"
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Address Line 2</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      value={addressLine2}
                      onChange={handleAddressLine2Change}
                      placeholder="Apt #"
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">City</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      value={city}
                      onChange={handleCityChange}
                      placeholder="Enter City"
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">State</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      as="select"
                      onChange={handleStateChange}
                      value={state}
                      aria-label="Select State"
                    >
                      <option>Select State</option>
                      {state_selection}
                    </Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Zip Code</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      value={zip}
                      onChange={handleZipChange}
                      placeholder="Enter Zip Code"
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditMember;
