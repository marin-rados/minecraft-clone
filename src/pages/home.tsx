import Celebrate from "../components/celebrate";
import GamesSale from "../components/games-sale";
import Intro from "../components/intro";

const Home = () => {
  return (
    <>
      <Intro />
      <GamesSale />
      <Celebrate />
    </>
  );
};

export default Home;
