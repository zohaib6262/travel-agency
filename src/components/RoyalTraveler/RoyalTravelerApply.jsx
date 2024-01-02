import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Row,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const RoyalTravelerApply = () => {
  return (
    <div className="w-100 h-90vh">
      <Card className="w-75 m-auto mt-5">
        <CardHeader>
          <CardTitle>
            <a href="/royal-travelers" className="me-2">
              <Icon.ArrowLeft size={25} />
            </a>
            Royal Traveler Seat Booking
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

export default RoyalTravelerApply;
