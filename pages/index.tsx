import type { NextPage } from "next";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

import JayCritchImage from "../public/jaycritch1.png";
import styles from "../styles/Home.module.scss";

const Landing: NextPage = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Metadata />

        <Row>
          <Col md={12} lg={4}>
            <Jumbotron className={"bg-platinum"}>
              <h1>Bio</h1>
            </Jumbotron>
          </Col>

          <Col
            md={12}
            lg={4}
            className={
              "d-flex justify-content-center flex-column order-first order-lg-0"
            }
          >
            <Image
              src={JayCritchImage}
              className={"rounded-circle"}
              alt={"Jay Critch Image"}
              placeholder={"blur"}
            />
            <h1 className={`${styles.neonText} my-5 text-center`}>
              Jay Critch
            </h1>
          </Col>

          <Col md={12} lg={4}>
            <Jumbotron className={"bg-platinum"}>
              <h1>Music</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
