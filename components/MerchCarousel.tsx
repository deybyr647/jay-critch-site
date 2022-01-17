import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import autumnLeaves from "/public/tme/merch/autumnleaves.webp";
import softServe from "/public/tme/merch/softserve.webp";
import tmeHoodie from "/public/tme/merch/tmehoodie.webp";
import tmeMasks from "/public/tme/merch/tmemasks.webp";
import tmeMenShorts from "/public/tme/merch/tmemenshorts.webp";
import tmePillow from "/public/tme/merch/tmepillow.webp";

import styles from "../styles/Home.module.scss";

const MerchCarousel = () => {
  return (
    <Carousel className={"w-75"}>
      <Carousel.Item>
        <Image
          src={autumnLeaves}
          alt={"Autumn Leaves Hoodie"}
          width={500}
          height={500}
          placeholder={"blur"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum bg-onyx"}>
            <a
              href={"https://www.talkmoneytme.net/product-page/autumn-leaves"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Autumn Leaves Hoodie
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={softServe}
          alt={"TME Soft Serve Tee"}
          width={500}
          height={500}
          placeholder={"blur"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum bg-onyx"}>
            <a
              href={"https://www.talkmoneytme.net/product-page/tme-soft-serve"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              TME Soft Serve Tees
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={tmeMasks}
          alt={"TME Masks"}
          width={500}
          height={500}
          placeholder={"blur"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum"}>
            <a
              href={"https://www.talkmoneytme.net/product-page/tme-mask"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              TME Masks
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={tmeHoodie}
          alt={"TME Hoodie"}
          width={500}
          height={500}
          placeholder={"blur"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum bg-onyx"}>
            <a
              href={"https://www.talkmoneytme.net/product-page/tme-hoodies"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              TME Hoodie
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={tmeMenShorts}
          alt={"TME Men's Shorts"}
          width={500}
          height={500}
          placeholder={"blur"}
        />

        <Carousel.Caption>
          <h3 className={"text-platinum"}>
            <a
              href={
                "https://www.talkmoneytme.net/product-page/tme-men-s-shorts"
              }
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              TME Men's Shorts
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={tmePillow}
          alt={"TME Pillow"}
          width={500}
          height={500}
          placeholder={"blur"}
        />
        <Carousel.Caption>
          <h3 className={"text-platinum"}>
            <a
              href={"https://www.talkmoneytme.net/product-page/tme-pillows"}
              className={styles.extLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              TME Pillow
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MerchCarousel;
