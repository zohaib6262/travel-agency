import React from "react";
import styles from "./BannerSection.module.css";
import { Button, Container } from "react-bootstrap";
const BannerSection = () => {
  return (
    <div className={styles.codeImag}>
      <div className="h-100 w-100 d-flex flex-wrap flex-column align-items-center justify-content-center ">
        <Container className="text-center">
          <h3 className="text-white">
            A Traveler's <span className="text-warning">Diary</span>
          </h3>
        </Container>
        <Container className="text-center">
          <p className="text-white">
            Travel and change of place impart new vigor to the mind
          </p>
        </Container>
        <div className="btn-group">
          <Button className="m-2 " href="./cultural-travelers">
            Cultural Travelers
          </Button>
          <Button className="m-2" href="./family-travelers">
            Family Travelers
          </Button>

          <Button className="m-2" href="./royal-travelers">
            Royal Travelers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
