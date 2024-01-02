import React from "react";
import styles from "./ServicesSection.module.css";
import serviceFirst from "../../../assets/images/serviceImageFirst.jpg";
import serviceSecond from "../../../assets/images/serviceImageSecond.jpg";
import serviceThird from "../../../assets/images/seviceImageThird.jpg";

import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText,
  CardTitle,
  Container,
} from "react-bootstrap";

const ServicesSection = () => {
  return (
    <div className={styles.backGroundColor}>
      <div className="d-inline-block w-100 h-100">
        <Container>
          <h2 className="py-5 text-white text-center">Services</h2>
          <CardGroup>
            <Card className="m-4">
              <CardImg
                alt="Card image cap"
                src={serviceFirst}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h4">Karachi To Islamabad</CardTitle>
                <CardText>
                  We are going to Islamabad To Naran kaghan every day at 11AM.
                </CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
            <Card className="m-4">
              <CardImg
                alt="Card image cap"
                src={serviceSecond}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h4">Islamabad To Naran kaghan</CardTitle>
                <CardText>
                  We are going to Islamabad To Naran kaghan every day at 11AM.{" "}
                </CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
            <Card className="m-4">
              <CardImg
                alt="Card image cap"
                src={serviceThird}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h4">Naran Kaghan to China</CardTitle>
                <CardText>
                  We are going to Naran Kaghan to China every night 8PM.{" "}
                </CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </div>
    </div>
  );
};

export default ServicesSection;
