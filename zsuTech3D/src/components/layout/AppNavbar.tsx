import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <nav className={`sideBar-nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/tech1" onClick={() => setIsOpen(false)}>
              {t("navigation.tank")}
            </Link>
          </li>
          <li>
            <Link to="/tech2" onClick={() => setIsOpen(false)}>
              Bayraktar TB2
            </Link>
          </li>
          <li>
            <Link to="/tech3" onClick={() => setIsOpen(false)}>
              HIMARS
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AppNavbar;
