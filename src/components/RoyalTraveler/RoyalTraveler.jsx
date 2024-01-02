import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ButtonGroup, Table } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const RoyalTraveler = () => {
  const [isView, setIsView] = useState(false);

  const startingView = () => {
    setIsView(true);
  };
  const closingView = () => {
    setIsView(false);
  };
  return (
    <div className=" w-100 h-90vh">
      <Table striped bordered hover className="w-75 m-auto mt-5" size="sm">
        <thead>
          <tr>
            <th colSpan={4}>
              <a href="/">
                <Icon.ArrowLeft className="m-2" size={25} />
              </a>
              Royal Travelers Data
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <ButtonGroup>
                <Button className="m-1" value={isView} onClick={startingView}>
                  View
                </Button>
                <Button
                  className="m-1"
                  href="./royal-travelers/royal-traveler-apply"
                >
                  Vote
                </Button>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <ButtonGroup>
                <Button className="m-1" value={isView} onClick={startingView}>
                  View
                </Button>
                <Button
                  className="m-1"
                  href="./royal-travelers/royal-traveler-apply"
                >
                  Vote
                </Button>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Lara</td>
            <td>
              <ButtonGroup>
                <Button className="m-1" value={isView} onClick={startingView}>
                  View
                </Button>
                <Button
                  className="m-1"
                  href="./royal-travelers/royal-traveler-apply"
                >
                  Vote
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={isView} onHide={closingView}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
          repellendus, velit similique ducimus facilis magni perspiciatis quidem
          consectetur. In?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closingView}>
            Close
          </Button>
          <Button variant="primary" onClick={closingView}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RoyalTraveler;
