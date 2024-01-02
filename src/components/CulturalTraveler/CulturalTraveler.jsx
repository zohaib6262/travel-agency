import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  Row,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const CulturalTraveler = () => {
  return (
    <div className="w-100 h-90vh">
      <Card className="w-75 m-auto mt-5">
        <CardHeader>
          <CardTitle>
            <a href="/" className="me-2">
              <Icon.ArrowLeft size={25} />
            </a>
            Cultural Traveler
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

export default CulturalTraveler;
