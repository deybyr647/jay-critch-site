import Image from "next/image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ISong } from "./spotify";

const SongCard = ({ previewURL, name, image, spotifyURL }: ISong) => {
  return (
    <Card
      className={
        "d-flex flex-row bg-platinum text-onyx mb-3 border-medpurple shadow"
      }
    >
      <Image
        className={"card-img-top w-50 p-3 rounded"}
        src={image.url}
        width={image.width}
        height={image.height}
        alt={name}
      />

      <Card.Body>
        <Card.Title className={"mb-5"}>{name}</Card.Title>
        <audio controls className={"w-100"}>
          <source src={previewURL} type="audio/mpeg" />
        </audio>
        <Button
          variant={"medpurple"}
          className={"text-platinum"}
          href={spotifyURL}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Listen on Spotify
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SongCard;
