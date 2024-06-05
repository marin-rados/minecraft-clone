import { minecraftGamesData } from "../data/games";
import discount from "../assets/icons/discount.svg";
import steam from "../assets/game platform icons/steam.svg";
import linux from "../assets/game platform icons/linux.svg";
import windows from "../assets/game platform icons/windows.svg";
import xbox from "../assets/game platform icons/xbox.svg";
import mac from "../assets/game platform icons/mac.svg";
import playstation from "../assets/game platform icons/playstation.svg";
import nintendoSwitch from "../assets/game platform icons/nintendoSwitch.svg";
import dirtblock from "../assets/images/dirtblock.jpg";
import googlePlay from "../assets/images/googleplay.png";
import appStore from "../assets/images/appstore.png";
import dividerRight from "../assets/images/divider_b_right.avif";
import dividerLeft from "../assets/images/divider_b_left.avif";
import { useNavigate } from "react-router-dom";

const GamesSale = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="games" id="games">
        <h2 className="games__title">SAVE UP TO 50% ON MINECRAFT GAMES</h2>
        <p className="games__disclamer">
          <img
            className="games__disclamer__img"
            src={discount}
            alt="discount image"
          />
          Discounts may vary by region. Limited time promotion; availability
          varies by platform.
        </p>
        <div className="sale">
          {minecraftGamesData.map((game) => {
            return (
              <div key={game.id} className="game-card">
                <img
                  className="game-card__image"
                  src={game.image}
                  alt={`${game.name} Image`}
                  onClick={() => {
                    navigate(`${game.gamePage}`);
                  }}
                />
                <p
                  className="game-card__name"
                  onClick={() => {
                    navigate(`${game.gamePage}`);
                  }}
                >
                  {game.name}
                </p>
                <div className="price">
                  <p
                    className="price__discounted"
                    onClick={() => {
                      navigate(`${game.gamePage}`);
                    }}
                  >
                    {game.discountPrice}
                    <span
                      className="price__original"
                      onClick={() => {
                        navigate(`${game.gamePage}`);
                      }}
                    >
                      {game.price}
                    </span>
                  </p>
                  <div
                    className="price__amount"
                    onClick={() => {
                      navigate(`${game.gamePage}`);
                    }}
                  >
                    <p>50% off</p>
                  </div>
                </div>
                <p className="game-card__genre">{game.genre}</p>
                <hr className="game-card__hr" />
                <div className="platforms">
                  <img
                    className="platforms__img"
                    src={windows}
                    alt="Windows Icon"
                  />
                  {game.macLinux && (
                    <>
                      <img
                        className="platforms__img"
                        src={mac}
                        alt="Mac Icon"
                      />
                      <img
                        className="platforms__img"
                        src={linux}
                        alt="Linux Icon"
                      />
                    </>
                  )}

                  <img className="platforms__img" src={xbox} alt="Xbox Icon" />
                  <img
                    className="platforms__img"
                    src={playstation}
                    alt="Playstation Icon"
                  />
                  <img
                    className="platforms__img"
                    src={nintendoSwitch}
                    alt="Nintendo Switch Icon"
                  />
                  {game.steam && (
                    <>
                      <img
                        className="platforms__img"
                        src={steam}
                        alt="Steam Icon"
                      />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mobile">
          <div className="mobile__info">
            <img src={dirtblock} alt="Dirtblock Image" />
            <p className="mobile__info__text">
              SAVE UP TO 70% ON MINECRAFT FOR MOBILE!
            </p>
          </div>
          <div className="mobile__stores">
            <a
              href="https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&utm_source=mcnet&pli=1"
              target="_blank"
            >
              <img
                className="mobile__stores__img"
                src={googlePlay}
                alt="Google Play Icon"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/minecraft/id479516143"
              target="_blank"
            >
              <img
                className="mobile__stores__img"
                src={appStore}
                alt="App Store Icon"
              />
            </a>
          </div>
        </div>
        <div className="decoration">
          <img src={dividerLeft} alt="Minecraft Image" />
          <img src={dividerRight} alt="Minecraft Image" />
        </div>
      </div>
    </>
  );
};

export default GamesSale;
