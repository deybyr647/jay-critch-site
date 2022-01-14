import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

import tmeLogo from "../public/tme.jpg";

const Navigation = () => {
  return (
    <Navbar
      bg={"maxpurple"}
      expand={"lg"}
      className={"w-100 mb-3 sticky-top px-3"}
    >
      <Navbar.Brand>
        <Image
          src={tmeLogo}
          width={50}
          height={50}
          alt={"TME Logo"}
          className={"rounded-circle"}
          placeholder={"blur"}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={"navigation-nav"} />
      <Navbar.Collapse id={"navigation-nav"}>
        <Nav className={"ms-auto"}>
          <Nav.Link href={"#music"}>Music</Nav.Link>
          <Nav.Link href={"https://soundcloud.com/JAYCRITCH"}>
            SoundCloud
          </Nav.Link>
          <Nav.Link
            href={"https://open.spotify.com/artist/6Av6GMCOznZIlHuNcBWgf4"}
          >
            Spotify
          </Nav.Link>
          <Nav.Link href={"https://www.talkmoneytme.net/"}>
            Talk Money Ent.
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
