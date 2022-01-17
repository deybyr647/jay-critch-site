import { useEffect, useState } from "react";
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
      <Jumbotron className={`bg-onyx text-platinum`}>
        <h3>Loading...</h3>
      </Jumbotron>
    );
  }

  return (
    <Jumbotron className={`bg-onyx text-platinum ${styles.cardContainer}`}>
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
