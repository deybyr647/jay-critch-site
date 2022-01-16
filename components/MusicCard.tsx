import { Card, Button } from "react-bootstrap";

interface IMusicCardProps {
  previewURL: string;
  title: string;
  isAlbum: boolean;
  spotifyLink: string;
}

const MusicCard = () => {
  return (
    <Card
      className={
        "d-flex flex-row bg-platinum text-onyx mb-3 border-medpurple shadow"
      }
    >
      <Card.Img variant={"top"} src={"/tme.jpg"} className={"w-50"} />
      <Card.Body>
        <Card.Title className={"mb-5"}>Music Title</Card.Title>
        <audio controls className={"w-100"}>
          <source
            src="https://p.scdn.co/mp3-preview/971b5dffa5add2566745d9e3caec8b8d338c960a?cid=baa38c5b71254ff0bae35b28e10e37bc"
            type="audio/mpeg"
          />
        </audio>
        <Button variant={"medpurple"} className={"text-platinum"}>
          Listen on Spotify
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MusicCard;
