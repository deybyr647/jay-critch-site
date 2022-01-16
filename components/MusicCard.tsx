import { Card, Button } from "react-bootstrap";
import { ISong } from "./spotify";

const MusicCard = ({ previewURL, name, image, spotifyURL }: ISong) => {
  return (
    <Card
      className={
        "d-flex flex-row bg-platinum text-onyx mb-3 border-medpurple shadow"
      }
    >
      <Card.Img variant={"top"} src={image.url} className={"w-50"} />
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

export default MusicCard;
