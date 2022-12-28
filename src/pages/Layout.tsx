import classNames from "classnames";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Container from "../components/Container";
import ErrorMessagePopup from "../components/ErrorMessagePopup";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import SuccessMessagePopup from "../components/SuccessMessagePopup";
import { useAuth, useSite } from "../context";
import { UserService } from "../services";

import useUserStore from "../store/user"

const Layout = () => {
  const { theme, dispatch } = useSite();
  
  const { user } = useAuth() as any;
  const { setUser } = useUserStore(state => state)

  useEffect(() => {
    UserService.getUserDetail(user._id).then((data: any) => {
      setUser({...data})
    });
  }, []);

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
          <Loading></Loading>
          <SuccessMessagePopup></SuccessMessagePopup>
          <ErrorMessagePopup></ErrorMessagePopup>

          <Outlet></Outlet>
        </Container>
        
      </div>
    </>
  );
};

export default Layout;
