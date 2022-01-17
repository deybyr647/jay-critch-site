import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import mallyBandz from "/public/tme/artists/mallybandz.webp";
import mariMac from "/public/tme/artists/marimac.webp";
import saeTheGuard from "/public/tme/artists/saetheguard.webp";
import tmeNana from "/public/tme/artists/tmenana.webp";
import tmeVendetta from "/public/tme/artists/vendetta.webp";
import tmeTape2 from "/public/tme/artists/tmetape2.webp";

import styles from "../styles/Home.module.scss";

const ArtistCarousel = () => {
  return (
    <Carousel className={"w-75"}>
      <Carousel.Item>
        <Image
          src={tmeTape2}
          width={500}
          height={500}
          placeholder={"blur"}
          alt={"Talk Money Tape 2 Album Cover"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum bg-onyx"}>
            <a
              href={"https://soundcloud.com/talkmoneygang"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Talk Money Ent.
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={mallyBandz}
          width={500}
          height={500}
          placeholder={"blur"}
          alt={"Mally Bandz"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum bg-onyx"}>
            <a
              href={"https://soundcloud.com/1mally"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Mally Bandz
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={tmeVendetta}
          width={500}
          height={500}
          placeholder={"blur"}
          alt={"TME Vendetta"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum"}>
            <a
              href={"https://soundcloud.com/vendddeta"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Vendetta
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={saeTheGuard}
          width={500}
          height={500}
          placeholder={"blur"}
          alt={"SaeTheGuard"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum"}>
            <a
              href={"https://soundcloud.com/blockgangsae"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              SaeTheGuard
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={tmeNana}
          width={500}
          height={500}
          placeholder={"blur"}
          alt={"TME Nana"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum bg-onyx"}>
            <a
              href={"https://soundcloud.com/tme-nana"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              TME Nana
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={mariMac}
          width={500}
          height={500}
          placeholder={"blur"}
          alt={"Mari Mac"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum bg-onyx"}>
            <a
              href={"https://soundcloud.com/maritheprophet"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Mari Mac
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ArtistCarousel;
