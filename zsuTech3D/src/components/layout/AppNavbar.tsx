import { useState } from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              Танк Т-72
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
