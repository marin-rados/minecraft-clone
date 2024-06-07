import mcLegendsLogo from "../assets/games/minecraft-legends/minecraft-legends-logo.avif";
import mcLegendsLatestUpdateImage from "../assets/games/minecraft-legends/mc-legends-update.webp";
import { MinecraftLegendsHowItWorks } from "../data/minecraftLegends";

const MinecraftLegends = () => {
  return (
    <>
      <div className="mc-legends">
        <div className="mc-legends-intro">
          <img
            src={mcLegendsLogo}
            alt="Minecraft Legends Logo"
            className="mc-legends-intro__logo"
          />
          <div className="mc-legends-intro__buy">GET LEGENDS</div>
        </div>
        <div className="mc-legends-update">
          <p className="mc-legends-update__heading">Get The Latest Update</p>
          <img
            src={mcLegendsLatestUpdateImage}
            alt=""
            className="mc-legends-update__img"
          />
          <p className="mc-legends-update__title">
            Hop Into Action With New Friends And Foes
          </p>
          <p className="mc-legends-update__description">
            Play Minecraft Legends’ biggest update! Hop into action with the
            fearless frog and lead the enigmatic witches to face the petrifying
            clanger piglin and the gusty air chopper.
          </p>
        </div>
        <div className="mc-legends-how-it-works">
          <p className="mc-legends-how-it-works__heading">How It Works</p>
          <div className="mc-legends-options">
            {MinecraftLegendsHowItWorks.map((option, index: number) => {
              return (
                <div className="mc-legends-options__card">
                  <img
                    src={option.image}
                    alt="Minecraft Legends How It Works Image"
                    className="mc-legends-options__card__img"
                  />
                  <p className="mc-legends-options__card__title">
                    {option.title}
                  </p>
                  <p className="mc-legends-options__card__description">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MinecraftLegends;
