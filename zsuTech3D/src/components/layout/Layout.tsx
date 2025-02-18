import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <header>
        <AppNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
