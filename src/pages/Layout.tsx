import { Outlet } from "react-router-dom";

import Container from "../components/Container";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
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
