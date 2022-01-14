import { Navbar, Nav } from "react-bootstrap";

const Footer = () => (
  <Navbar bg={"maxpurple"} className={"justify-content-center"}>
    <Nav>
      <Nav.Link
        href={"https://deybyr647.com"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        &copy; 2022 | Deyby Rodriguez
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Footer;
