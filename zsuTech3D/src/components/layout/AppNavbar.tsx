import { Link } from "react-router-dom";
const AppNavbar = () => {
  return (
    <nav className="sideBar-nav">
      <ul>
        <li>
          <Link to="/tech1">Техніка 1</Link>
        </li>
        <li>
          <Link to="/tech2">Техніка 2</Link>
        </li>
        <li>
          <Link to="/tech3">Техніка 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppNavbar;
