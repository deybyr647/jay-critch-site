import Image from "next/image";
import Card from "react-bootstrap/Card";
import { ISong } from "./spotify";
import styles from "../styles/Home.module.scss";

const SongCard = ({ previewURL, name, image, spotifyURL }: ISong) => {
  return (
    <Card
      className={`bg-platinum text-onyx mb-3 border-medpurple ${styles.songCard}`}
    >
      <Image
        className={"card-img-top rounded ps-3 pe-3 pt-3"}
        src={image.url}
        width={image.width}
        height={image.height}
        alt={name}
      />

      <Card.Body>
        <Card.Title className={"mb-3 text-center"}>
          <a
            href={spotifyURL}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={styles.extLink}
            title={`Listen to "${name}" on Spotify`}
          >
            {name}
          </a>
        </Card.Title>

        <audio controls className={"w-100"}>
          <source src={previewURL} type="audio/mpeg" />
        </audio>
      </Card.Body>
    </Card>
  );
};

export default SongCard;
