import classNames from "classnames";
import { Outlet } from "react-router-dom";

import Container from "../components/Container";
import NavbarNoAuth from "../components/NavbarNoAuth";
import { useSite } from "../context";

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
          <Outlet></Outlet>
        </Container>
        
      </div>
    </>
  );
};

export default Layout;
