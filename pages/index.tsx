import type { NextPage } from "next";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import SongCardContainer from "../components/SongCardContainer";
import ArtistCarousel from "../components/ArtistCarousel";
import MerchCarousel from "../components/MerchCarousel";

import JayCritchImage from "../public/jaycritch.png";
import styles from "../styles/Home.module.scss";

const Landing: NextPage = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Metadata />

        <Row>
          <Col md={12} lg={4}>
            <Jumbotron className={"bg-onyx text-platinum"}>
              <h1 className={"text-center"}>My Music</h1>
            </Jumbotron>

            <SongCardContainer />
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
            <Jumbotron className={"bg-onyx text-platinum"}>
              <h1 className={"text-center"}>About Me</h1>
            </Jumbotron>

            <Jumbotron
              className={`bg-onyx text-platinum ${styles.cardContainer}`}
            >
              <p>
                HAYY! What's up! I'm Jay Critch and I'm a rapper from Brooklyn,
                New York. I began writing rhymes in grade school, but didn't
                start releasing songs until 2016. That same year is when I had
                my first major breakthrough with my song "Did It Again".
              </p>
              <br /> <br />
              <p>
                Since then, I've continued to drop hits while collaborating with
                other artists. I've also established my own record label, called
                Talk Money Entertainment, and have also released clothing and
                merchandise featuring Talk Money branding. Some of my more
                recent projects include my albums "Signed With Love" and "Critch
                Tape".
              </p>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col
            md={12}
            lg={6}
            className={"d-flex flex-column align-items-center mb-3"}
          >
            <Jumbotron className={"bg-onyx text-platinum w-100"}>
              <h1 className={"text-center"}>TME Merch</h1>
            </Jumbotron>

            <MerchCarousel />
          </Col>

          <Col
            md={12}
            lg={6}
            className={"d-flex flex-column align-items-center mb-3"}
          >
            <Jumbotron className={"bg-onyx text-platinum w-100"}>
              <h1 className={"text-center"}>Other TME Artists</h1>
            </Jumbotron>

            <ArtistCarousel />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
