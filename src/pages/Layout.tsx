import classNames from "classnames";
import { Outlet } from "react-router-dom";

import Container from "../components/Container";
import ErrorMessagePopup from "../components/ErrorMessagePopup";
import Navbar from "../components/Navbar";
import { useSite } from "../context";

const Layout = () => {
  const { theme, dispatch } = useSite();
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <div className={classNames({
        "main": true,
        "bg-gray-300": theme === "dark",
        "bg-gray-100": theme === "light",
      })}>
        <Container>
          <ErrorMessagePopup></ErrorMessagePopup>

          <Outlet></Outlet>
        </Container>
        
      </div>
    </>
  );
};

export default Layout;
