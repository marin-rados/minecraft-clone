import mcDungeonsLogo from "../assets/games/minecraft-dungeons/dungeons-logo.webp";
import {
  MinecraftDungeonsDlc,
  MinecraftDungeonsHowItWorks,
} from "../data/minecraftDungeons";

const MinecraftDungeons = () => {
  return (
    <>
      <div className="mc-dungeons">
        <div className="dungeons-intro">
          <img
            className="dungeons-intro__logo"
            src={mcDungeonsLogo}
            alt="Minecraft Dungeons Logo"
          />
        </div>
        <div className="dungeons-how-it-works">
          <p className="dungeons-how-it-works__title">HOW IT WORKS</p>
          <div className="dungeons-how-it-works-wrapper">
            {MinecraftDungeonsHowItWorks.map((dungeons, index: number) => {
              return (
                <div key={index} className="dungeons-how-it-works__card">
                  <img
                    src={dungeons.image}
                    alt="Minecraft Dungeons Option Image"
                    className="dungeons-how-it-works__card__img"
                  />
                  <p className="dungeons-how-it-works__card__title">
                    {dungeons.title}
                  </p>
                  <p className="dungeons-how-it-works__card__description">
                    {dungeons.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dungeons-dlc">
          <p className="dungeons-dlc__title">DLC for Minecraft Dungeons</p>

          {MinecraftDungeonsDlc.map((dlc) => {
            return (
              <div className="dungeons-dlc__card">
                <img
                  src={dlc.image}
                  alt={dlc.description}
                  className="dungeons-dlc__card__img"
                />
              </div>
            );
          })}
          <p className="dungeons-dlc__info">
            Venture deeper into Minecraft Dungeons with downloadable content!
            Challenge yourself and your crew with new missions, mobs, gear, and
            more!
          </p>
        </div>
      </div>
    </>
  );
};

export default MinecraftDungeons;
