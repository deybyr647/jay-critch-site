import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import { ISong } from "./spotify";
import Jumbotron from "./Jumbotron";
import SongCard from "./SongCard";
import styles from "../styles/Home.module.scss";

const SongCardContainer = () => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const req = await fetch("/api/music");
      const data = await req.json();

      setSongs(data);
      setIsLoaded(true);
    })();
  }, []);

  if (!isLoaded) {
    return (
      <Jumbotron
        className={`d-flex align-items-center justify-content-between bg-onyx text-platinum`}
      >
        <h3 className={"m-0 p-0"}>Fetching Music...</h3>
        <Spinner animation={"grow"} variant={"medpurple"} />
      </Jumbotron>
    );
  }

  return (
    <Jumbotron
      className={`d-flex flex-column align-items-center bg-onyx ${styles.cardContainer}`}
    >
      {songs.map((s: ISong) => (
        <SongCard
          previewURL={s.previewURL}
          name={s.name}
          image={s.image}
          spotifyURL={s.spotifyURL}
          key={s.id}
        />
      ))}
    </Jumbotron>
  );
};

export default SongCardContainer;
