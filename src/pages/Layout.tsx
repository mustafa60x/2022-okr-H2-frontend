import classNames from "classnames";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Container from "../components/Container";
import ErrorMessagePopup from "../components/ErrorMessagePopup";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import SuccessMessagePopup from "../components/SuccessMessagePopup";
import { useAuth, useSite } from "../context";
import { UserService } from "../services";

import useUserStore from "../store/user";
import useSiteStore from "../store/site";


const Layout = ({socket}) => {

  const { theme, dispatch } = useSite();

  const { user } = useAuth() as any;

  const { setUser } = useUserStore((state) => state);
  const { destroyAllErrors } = useSiteStore(state => state)

  const [mounted, setMounted] = useState(false)

  let location = useLocation()

  useEffect(
    () => {
      destroyAllErrors()
    },
    [location]
  )
  

  useEffect(() => {
    
    (async () => {
      console.log('layout')
      await UserService.getUserDetail(user._id).then((data: any) => {
        setUser({ ...data });

        setMounted(true)
      });
  
      if(socket) {
        // Sockets
        socket.on("connect", () => {
          console.log("socket bağlandı... :)");
        });
        socket.on("disconnect", () => {
          console.log("socket disconnect... :)");
        });
  
        socket.on("pong", () => {
          console.log("socket pong... :)");
        });
      }
    })()

    return () => {
      console.log('Layout unmounting')
      if (socket) {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("pong");
      }
    };
  }, []);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <div
        className={classNames({
          main: true,
          "bg-gray-300": theme === "dark",
          "bg-gray-100": theme === "light",
        })}
      >
        <Container>
          {mounted ? 'mounted' : 'unmounted'}
          <Loading></Loading>
          <SuccessMessagePopup></SuccessMessagePopup>
          <ErrorMessagePopup></ErrorMessagePopup>

          {mounted && <Outlet></Outlet>}
        </Container>
      </div>
    </>
  );
};

export default Layout;
