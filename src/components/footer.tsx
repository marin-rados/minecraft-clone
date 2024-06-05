import esrb from "../assets/images/esrb.png";
import mojangLogo from "../assets/images/Mojang2020Logo.png";
import xboxLogo from "../assets/images/xbox.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__companies">
          <img
            className="footer__companies__img"
            src={mojangLogo}
            alt="Company Logo"
          />
          <img
            className="footer__companies__img"
            src={xboxLogo}
            alt="Company Logo"
          />
          <img
            className="footer__companies__img"
            src={esrb}
            alt="Company Logo"
          />
        </div>
        <div className="footer__copyright">
          © 2024 Mojang AB. TM Microsoft Corporation.
        </div>
      </div>
    </>
  );
};

export default Footer;
