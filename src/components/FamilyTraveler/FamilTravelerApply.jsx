import React from "react";
import {
  Button,
  Col,
  Row,
  Form,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const FamilyTravelerApply = () => {
  return (
    <div className="h-90vh w-100">
      <Card className="w-75 m-auto mt-5">
        <CardHeader>
          <CardTitle>
            <a href="/family-travelers" className="me-2">
              <Icon.ArrowLeft size={25} />
            </a>
            Family Travellers Seat Booking
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                First Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="First Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Last Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Last Name" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default FamilyTravelerApply;
