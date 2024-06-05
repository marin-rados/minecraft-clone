import aboveImg from "../assets/images/above.png";
import bottomImg from "../assets/images/bottom.png";
import topLeft from "../assets/images/top_left.png";
import bottomLeft from "../assets/images/bottom_left.png";
import topRight from "../assets/images/top_right.png";
import bottomRight from "../assets/images/bottom_right.png";

const Intro = () => {
  return (
    <>
      <div className="celebrate">
        <div className="celebrate__images">
          <img className="celebrate__images__sides" src={topLeft} alt="" />
          <img
            className="celebrate__images__main"
            src={aboveImg}
            alt="Minecraft Image"
          />
          <img className="celebrate__images__sides" src={topRight} alt="" />
        </div>
        <div className="celebrate__content">
          <h1 className="celebrate__content__title">Shape your world</h1>
          <p className="celebrate__content__text">
            From humble beginnings to a worldwide phenomenon, Minecraft's 15th
            anniversary fills us with joy and wonder. Here's to many more
            block-filled years!
          </p>
        </div>
        <div className="celebrate__images">
          <img className="celebrate__images__sides" src={bottomLeft} alt="" />
          <img
            className="celebrate__images__main"
            src={bottomImg}
            alt="Minecraft Image"
          />
          <img className="celebrate__images__sides" src={bottomRight} alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
