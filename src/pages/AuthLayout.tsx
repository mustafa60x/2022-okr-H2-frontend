import classNames from "classnames";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Container from "../components/Container";
import ErrorMessagePopup from "../components/ErrorMessagePopup";
import NavbarNoAuth from "../components/NavbarNoAuth";
import SuccessMessagePopup from "../components/SuccessMessagePopup";
import { useAuth, useSite } from "../context";

const Layout = () => {
  const { theme, dispatch } = useSite();

  return (
    <>
      <div>
        <NavbarNoAuth></NavbarNoAuth>
      </div>

      <div className={classNames({
        "main": true,
        "bg-gray-300": theme === "dark",
        "bg-gray-100": theme === "light",
      })}>
        <Container>
          <SuccessMessagePopup></SuccessMessagePopup>
          <ErrorMessagePopup></ErrorMessagePopup>

          <Outlet></Outlet>
        </Container>
        
      </div>
    </>
  );
};

export default Layout;
