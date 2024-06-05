import { useNavigate } from "react-router-dom";
import logo from "../assets/minecraft-logo.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          src={logo}
          alt="Logo"
        />
        <nav className="header__nav">
          <a className="header__nav__link link" href="#games">
            GAMES
          </a>
          <a className="header__nav__link link" href="#">
            SHOP
          </a>
          <a className="header__nav__link link" href="#">
            ABOUT
          </a>
        </nav>

        <a className="header__contact link" href="#">
          CONTACT
        </a>
      </div>
      <div className="header-bg"></div>
    </>
  );
};

export default Header;
