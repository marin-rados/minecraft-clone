import celebrate from "../assets/images/celebrate.jpg";
import fifteenDays from "../assets/images/15-days.png";

const Celebrate = () => {
  return (
    <>
      <div className="celebrate">
        <p className="celebrate__title">15 DAYS OF MINECRAFT</p>
        <img
          className="celebrate__img"
          src={celebrate}
          alt="Celebration Image"
        />

        <p className="celebrate__info">
          Celebrate with 15 days of free Character Creator items for Minecraft’s
          15th Anniversary! Claim your gift each day from May 15 – 29 in the
          Minecraft Bedrock Marketplace.
        </p>
        <img src={fifteenDays} alt="Fifteen Days of Celebration Image" />
      </div>
    </>
  );
};

export default Celebrate;
