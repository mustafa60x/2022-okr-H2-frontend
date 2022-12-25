import { Outlet } from "react-router-dom";

import Container from "../components/Container";
import NavbarNoAuth from "../components/NavbarNoAuth";

const Layout = () => {
  return (
    <>
      <div>
        <NavbarNoAuth></NavbarNoAuth>
      </div>

      <div className="main">
        <Container>
          <Outlet></Outlet>
        </Container>
        
      </div>
    </>
  );
};

export default Layout;
