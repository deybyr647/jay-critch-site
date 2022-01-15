import { Card, Button } from "react-bootstrap";

interface IMusicCardProps {
  previewURL: string;
  title: string;
  isAlbum: boolean;
  spotifyLink: string;
}

const MusicCard = () => {
  return (
    <Card className={"d-flex flex-row bg-onyx text-platinum mb-3"}>
      <Card.Img variant={"top"} src={"/tme.jpg"} className={"w-50"} />
      <Card.Body>
        <Card.Title className={"mb-5"}>Music Title</Card.Title>
        <Button variant={"maxpurple"} className={"mb-3 text-platinum"}>
          Preview
        </Button>
        <Button variant={"maxpurple"} className={"text-platinum"}>
          Listen on Spotify
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MusicCard;
