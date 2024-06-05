import {
  MinecraftJavaBedrockFeatures,
  MinecraftJavaBedrockHowItWorks,
  MinecraftJavaBedrockPlatforms,
} from "../data/minecraftJavaBedrock";

const MinecraftJavaBedrockEdition = () => {
  return (
    <>
      <div className="mc-javabedrock">
        <div className="intro">
          <h1 className="intro__title">The world is yours for the making</h1>
        </div>
        <div className="game-platforms">
          <p className="game-platforms__title">PLATFORMS</p>
          <p className="game-platforms__description">
            Buy Minecraft: Java & Bedrock Edition* and get both versions of the
            game for the price of one. You can easily switch between games using
            the unified launcher and cross-play with any current edition of
            Minecraft, including consoles and mobile.{" "}
          </p>
          <p className="game-platforms__disclamer">
            *Mac and Linux are compatible with Java Edition only.
          </p>
          <div className="all-platforms">
            {MinecraftJavaBedrockPlatforms.map((platform, index: number) => {
              return (
                <div key={index} className="all-platforms__platform">
                  <span className="wrap">
                    <img
                      src={platform.image}
                      alt={platform.description}
                      className="all-platforms__platform__img"
                    />
                    <a href={platform.href} target="_blank">
                      <p className="all-platforms__platform__name">
                        {platform.description}
                      </p>
                    </a>
                  </span>
                  {platform.title && (
                    <>
                      <a
                        href="https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc"
                        target="_blank"
                      >
                        <div className="all-platforms__platform__buy">
                          <p>BUY NOW</p>
                        </div>
                      </a>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="discover">
          <p className="discover__title">Discover Minecraft</p>
          <p className="discover__description">
            Minecraft is a game made up of blocks, creatures, and community.
            Blocks can be used to reshape the world or build fantastical
            creations. Creatures can be battled or befriended, depending on your
            playstyle. Experience epic adventures solo or with friends, there’s
            no wrong way to play. Unless you’re digging straight down.
          </p>
          <div className="features">
            {MinecraftJavaBedrockFeatures.map((feature, index: number) => {
              return (
                <div key={index} className="features__card">
                  <img
                    src={feature.image}
                    alt="Feature Image"
                    className="features__card__img"
                  />
                  <p className="features__card__description">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="how-it-works">
          <p className="how-it-works__title">HOW IT WORKS</p>
          <div className="options">
            {MinecraftJavaBedrockHowItWorks.map((option, index: number) => {
              return (
                <div className="options__option" key={index}>
                  <img
                    src={option.image}
                    alt=""
                    className="options__option__image"
                  />
                  <p className="options__option__title">{option.title}</p>
                  <p className="options__option__description">
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

export default MinecraftJavaBedrockEdition;
