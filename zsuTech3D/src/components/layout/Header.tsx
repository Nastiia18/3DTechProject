import {
  FaUser,
  FaDonate,
  FaHome,
  FaEnvelope,
  FaNewspaper,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/images/logo3.jpg";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-right">
          <nav className="header-nav">
            <Link to="/" className="nav-link">
              {isMobile ? (
                <FaHome title={t("navigation.home")} />
              ) : (
                t("navigation.home")
              )}
            </Link>
            <Link to="/contact" className="nav-link">
              {isMobile ? (
                <FaEnvelope title={t("navigation.contact")} />
              ) : (
                t("navigation.contact")
              )}
            </Link>
          </nav>
          <div className="header-icons">
            <FaUser className="icon" title="Профіль" />
            <select
              className="lang-select"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="uk">🇺🇦</option>
              <option value="en">en🇬</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
