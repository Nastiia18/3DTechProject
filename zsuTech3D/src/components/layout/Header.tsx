import { FaSearch, FaUser, FaDonate } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/images/logo3.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-right">
          <nav className="header-nav">
            <Link to="/" className="nav-link">
              ГОЛОВНА
            </Link>
            <Link to="/volunteers" className="nav-link">
              ВОЛОНТЕРСТВО
            </Link>
            <Link to="/contact" className="nav-link">
              КОНТАКТИ
            </Link>
            <Link to="/news" className="nav-link">
              НОВИНИ
            </Link>
          </nav>
          <div className="header-icons">
            <FaUser className="icon" title="Профіль" />
            <FaSearch className="icon" title="Підтримка ЗСУ" />
            <FaDonate className="icon" title="Допомога" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
