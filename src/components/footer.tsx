import esrb from "../assets/images/esrb.png";
import mojangLogo from "../assets/images/Mojang2020Logo.png";
import xboxLogo from "../assets/images/xbox.jpg";
import facebookLogo from "../assets/social-media/facebook.svg";
import instagramLogo from "../assets/social-media/instagram.svg";
import redditLogo from "../assets/social-media/reddit.svg";
import youtubeLogo from "../assets/social-media/youtube.svg";
import twitterLogo from "../assets/social-media/twitter.svg";
import globe from "../assets/icons/globe.svg";
import microsoft from "../assets/icons/microsoft.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="follow-minecraft">
          <p className="follow-minecraft__title">FOLLOW MINECRAFT</p>
          <div className="follow-minecraft__socials">
            <a href="https://www.youtube.com/minecraft" target="_blank">
              <img
                className="follow-minecraft__socials__img youtube"
                src={youtubeLogo}
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/minecraft/" target="_blank">
              <img
                className="follow-minecraft__socials__img instagram"
                src={instagramLogo}
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/minecraft/" target="_blank">
              <img
                className="follow-minecraft__socials__img facebook"
                src={facebookLogo}
                alt=""
              />
            </a>
            <a href="https://x.com/Minecraft" target="_blank">
              <img
                className="follow-minecraft__socials__img twitter"
                src={twitterLogo}
                alt=""
              />
            </a>
            <a href="https://www.reddit.com/r/Minecraft/" target="_blank">
              <img
                className="follow-minecraft__socials__img reddit"
                src={redditLogo}
                alt=""
              />
            </a>
          </div>
        </div>
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
        <div className="copyright">
          <div className="copyright__language">
            <img
              src={globe}
              alt="Globe Icon"
              className="copyright__language__globe"
            />
            <p className="copyright__language__select">
              English(United States)
            </p>
          </div>
          <div className="copyright__links">
            <p className="copyright__links__link">Privacy and Cookies</p>
            <p className="copyright__links__link">Terms of use</p>
            <p className="copyright__links__link">Trademarks</p>
            <p className="copyright__links__link">About our ads</p>
            <p className="copyright__links__link">© 2024 Microsoft</p>
          </div>
          <div className="copyright__microsoft">
            <img
              src={microsoft}
              alt="Microsoft Logo"
              className="copyright__microsoft__img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
