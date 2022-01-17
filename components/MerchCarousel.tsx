import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import autumnLeaves from "/public/tme/merch/autumnleaves.webp";
import softServe from "/public/tme/merch/softserve.webp";
import tmeHoodie from "/public/tme/merch/tmehoodie.webp";
import tmeMasks from "/public/tme/merch/tmemasks.webp";
import tmeMenShorts from "/public/tme/merch/tmemenshorts.webp";
import tmePillow from "/public/tme/merch/tmepillow.webp";

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
          <h3 className={"text-platinum bg-onyx"}>Autumn Leaves Hoodie</h3>
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
          <h3 className={"text-platinum bg-onyx"}>TME Soft Serve Tees</h3>
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
          <h3 className={"text-platinum"}>TME Masks</h3>
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
          <h3 className={"text-platinum bg-onyx"}>TME Hoodie</h3>
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
          <h3 className={"text-platinum"}>TME Men's Shorts</h3>
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
          <h3 className={"text-platinum"}>TME Pillow</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MerchCarousel;
