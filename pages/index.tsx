import type { NextPage } from "next";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MusicCardContainer from "../components/MusicCardContainer";

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
            <Jumbotron className={"bg-platinum text-center"}>
              <h1>About Me</h1>
            </Jumbotron>
            <Jumbotron>
              <p>
                HAYY! What's up! My name is Jason Critchlow, better known as Jay
                Critch. I'm a rapper hailing from Brooklyn, New York, from the
                Clinton Hill area. I began writing rhymes in grade school, but
                didn't start releasing songs until 2016. That same year is when
                I released a song called "Did It Again", which was my first
                breakthrough. The song blew up in popularity so much that a year
                later, Rich The Kid remixed my song by adding his own verse,
                making it blow up some more. Since then, I've continued to drop
                hits while collaborating with other artists. I've also
                established my own record label, called Talk Money
                Entertainment, and have also released clothing and merchandise
                featuring Talk Money branding. Some of my more recent musical
                projects include my album "Signed With Love" and "Critch Tape".
              </p>
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
            <Jumbotron className={"bg-platinum text-center"}>
              <h1>My Music</h1>
            </Jumbotron>

            <MusicCardContainer />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
