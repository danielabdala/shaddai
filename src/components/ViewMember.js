import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const ViewMember = (props) => {
  console.log("ViewMember props.show:", props.show);
  return (
    <Modal
      show={props.show}
      size="lg"
      onHide={props.onClose}
      animation
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Additional details for{" "}
          {props.member.firstname + " " + props.member.lastname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              Full Name
            </Col>
            <Col xs={6} md={4}>
              Address
            </Col>
            <Col xs={6} md={4}>
              Birth Day
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              {props.member.firstname + " " + props.member.lastname}
            </Col>
            <Col xs={6} md={4}>
              <Row xs={6} md={4}>
                {props.member.address1}
              </Row>

              <Row xs={6} md={4}>
                {props.member.address2}
              </Row>

              <Row xs={6} md={4}>
                {props.member.city + ", " + props.member.state}
              </Row>

              <Row xs={6} md={4}>
                {props.member.zipcode}
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ViewMember;
