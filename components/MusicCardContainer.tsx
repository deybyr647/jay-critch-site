import Jumbotron from "./Jumbotron";
import MusicCard from "./MusicCard";
import styles from "../styles/Home.module.scss";

const MusicCardContainer = () => {
  return (
    <Jumbotron className={`bg-platinum ${styles.cardContainer}`}>
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
    </Jumbotron>
  );
};

export default MusicCardContainer;
