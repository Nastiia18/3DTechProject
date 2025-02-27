import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Header from "./Header";
import Footer from "./Footer";
import "../../App.css";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <header>
        <AppNavbar />
      </header>
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
