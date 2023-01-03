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
import useMessageStore from "../store/message";


const Layout = ({socket}) => {

  const { theme, dispatch } = useSite();

  const { user } = useAuth() as any;

  const { setUser } = useUserStore((state) => state);
  const { destroyAllErrors } = useSiteStore(state => state)
  const {
  selectedUser,
  addMessage,
  addRoom,
  setTopToRoom,
  GENERAL_CHAT_ID,
} = useMessageStore((state) => state) as any;

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

        // Socket Listeners
        socket.on(`new_request:${user._id}`, (data) => {
          // Room alanına ekle
          addRoom(data)
        });

        socket.on("entered_to_general_chat", (msg) => {
          if (selectedUser?._id === GENERAL_CHAT_ID) {
            addMessage(msg);
          }
        });

        socket.on("received_message_from_general_chat", function (data) {
          {
            addMessage(data);
          }
        });

        socket.on("receive_private_message", (data) => {
          addMessage(data);
          setTopToRoom(data.roomId)
        });
      }
    })()

    return () => {
      console.log('Layout unmounting')
      if (socket) {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("pong");
        // Listeners
        socket.off(`new_request:${user._id}`);
        socket.off("entered_to_general_chat");
        socket.off("received_message_from_general_chat");
        socket.off("receive_private_message");
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
