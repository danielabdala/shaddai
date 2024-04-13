import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const AddMember = ({ onCancel, onSubmit, members, show }) => {
  const validationSchemaForAddForm = yup.object({
    lastName: yup.string().required("Last Name is required"),
    firstName: yup.string().required("First Name is required"),

    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    dob: yup
      .date()
      .max(new Date(), "Date of birth must be in the past")
      .required("Date of birth is required"),
    addressLine1: yup.string().required("Address Line 1 is required."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      dob: "",
      addressLine1: "",
      addressLine: "",
      state: "",
      zipcode: "",
    },
    validationSchema: validationSchemaForAddForm,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);

      const newMember = {
        id: Math.round(Math.random() * 9999), //assign random id to member's id
        firstname: values.firstName,
        lastname: values.lastName,
        DOB: values.dob,
        phone: values.phoneNumber,
        address1: values.addressLine1,
        address2: values.addressLine2,
        city: values.city,
        state: values.state,
        zipcode: values.zip,
        isMember: true,
      };

      const updatedMembers = [...currentMembers, newMember];
      setCurrentMembers(updatedMembers);
      onSubmit(newMember); // it executes call back function in app module which update members state
    },
  });

  const [currentMembers, setCurrentMembers] = useState(members);

  const handleCancel = () => {
    onCancel(); //goes back to membershowlist module
  };

  const handleFirstNameChange = (event) => {
    // setFirstName(event.target.value);
    formik.handleChange(event);
  };

  const handleLastNameChange = (event) => {
    // setLastName(event.target.value);
    formik.handleChange(event);
  };

  const handlePhoneNumberChange = (event) => {
    // setPhoneNumber(event.target.value);
    formik.handleChange(event);
  };
  const handleDobChange = (event) => {
    // setDob(event.target.value);
    formik.handleChange(event);
  };
  const handleAddressLine1Change = (event) => {
    // setAddressLine1(event.target.value);
    formik.handleChange(event);
  };
  const handleAddressLine2Change = (event) => {
    // setAddressLine2(event.target.value);
    formik.handleChange(event);
  };
  const handleCityChange = (event) => {
    // setCity(event.target.value);
    formik.handleChange(event);
  };
  const handleStateChange = (event) => {
    // setState(event.target.value);
    formik.handleChange(event);
  };
  const handleZipChange = (event) => {
    // setZip(event.target.value);
    formik.handleChange(event);
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
        <Modal.Title>Add Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={10}>
              <Form onSubmit={formik.handleSubmit}>
                {/* <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">First Name</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
                      onChange={handleFirstNameChange}
                      placeholder="Enter first name"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div>{formik.errors.firstName}</div>
                    ) : null}
                  </Col>
                </Form.Group> */}

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Last Name</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={handleLastNameChange}
                      placeholder="Enter last name"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div>{formik.errors.lastName}</div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Phone Number</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      required
                      type="text"
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="Enter phone number"
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <div>{formik.errors.phoneNumber}</div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Date of Birth</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      required
                      type="date"
                      name="dob"
                      value={formik.values.dob}
                      onChange={handleDobChange}
                      placeholder="Enter DOB"
                    />
                    {formik.touched.dob && formik.errors.dob ? (
                      <div>{formik.errors.dob}</div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Address Line 1</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      required
                      type="text"
                      name="addressLine1"
                      value={formik.values.addressLine1}
                      onChange={handleAddressLine1Change}
                      placeholder="Enter Address"
                    />
                    {formik.touched.addressLine1 &&
                    formik.errors.addressLine1 ? (
                      <div>{formik.errors.addressLine1}</div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Address Line 2</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      name="addressLine2"
                      value={formik.values.addressLine2}
                      onChange={handleAddressLine2Change}
                      placeholder="Apt #"
                    />
                    {formik.touched.addressLine2 &&
                    formik.errors.addressLine2 ? (
                      <div>{formik.errors.addressLine2}</div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">City</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      name="city"
                      value={formik.values.city}
                      onChange={handleCityChange}
                      placeholder="Enter City"
                    />
                    {formik.touched.city && formik.errors.city ? (
                      <div>{formik.errors.city}</div>
                    ) : null}
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">State</Form.Label>
                  <Col className="col-md-9">
                    <Form.Select
                      onChange={handleStateChange}
                      value={formik.values.state}
                      aria-label="Select State"
                    >
                      <option>Select State</option>
                      {state_selection}
                    </Form.Select>
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <Form.Label className="col-md-3">Zip Code</Form.Label>
                  <Col className="col-md-9">
                    <Form.Control
                      type="text"
                      name="zip"
                      value={formik.values.zip}
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
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMember;
