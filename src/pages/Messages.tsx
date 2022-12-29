import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";

import man from "../assets/man.png";
import woman from "../assets/woman.png";
import publicChat from "../assets/public_chat.png";
import classNames from "classnames";

import useMessageStore from "../store/message";
import useUserStore from "../store/user";

import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const GENERAL_CHAT_ID = "000111";

const Messages = ({ socket }) => {
  const {
    messages,
    setAllMessages,
    selectedUser,
    setSelectedUser,
    addMessage,
    destroyAllMessages,
    users,
  }: {
    messages: any;
    setAllMessages: any;
    selectedUser: any;
    setSelectedUser: any;
    addMessage: any;
    destroyAllMessages: any;
    users: any;
  } = useMessageStore((state) => state);

  const { user }: { user: any } = useUserStore((state) => state);

  const [inputMessage, setInputMessage] = useState("");

  const inputMessageRef = useRef(null);

  const selectUser = (key) => {
    if (key._id !== user._id) {
      setSelectedUser(key);
      destroyAllMessages();

      if (key._id === GENERAL_CHAT_ID) {
        socket.emit("joined_general_chat");
      } else {
        socket.emit("message", "hi everyone");
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputMessage(inputMessageRef.current.value);
    }
  };

  useEffect(() => {
    inputMessageRef.current.value = "";
    inputMessageRef.current.focus();

    const identifier = setTimeout(() => {
      if (inputMessage) {
        if (socket) {
          socket.emit("message", {
            text: "selam",
            name: localStorage.getItem("userName"),
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
          });

          socket.emit("send_message_general_chat", { text: inputMessage });
        }
        // socket send message
        // mesaj socket'e gider ve orada database'e yazılır, sonra kullanıcılara mesaj gönderilir ve ekrana basılır

        setInputMessage("");
      }
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [inputMessage]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef) {
        const element = messagesEndRef.current;
        element.scrollTop = element.scrollHeight;
      }
    }, 0);
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    selectUser({ _id: GENERAL_CHAT_ID })

    if (socket) {
      // Sockets
      socket.on("general_chat", (msg) => {
        addMessage(msg);
      });

      socket.on("receive_message_general_chat", (msg) => {
        addMessage(msg);
      });

      return () => {
        socket.off("general_chat");
        socket.off("receive_message_general_chat");
      };
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Mesajlar</title>
      </Helmet>

      <PageTitle title="Mesajlar" bgColor="#86efac" color="#584b85"></PageTitle>

      <div id="chatBox" className="bg-gray-200 w-full rounded-lg" style={{ height: "36rem"}}>
        <div className="grid grid-cols-4 h-full">
          <div
            id="leftSide"
            className="col-span-1 rounded bg-slate-100 flex flex-col h-full overflow-auto border border-slate-300"
          >
            <div
              className={classNames({
                "flex items-center gap-4 p-4 border-b border-slate-300 cursor-pointer hover:bg-gray-200":
                  true,
                "bg-green-100": selectedUser._id === GENERAL_CHAT_ID,
              })}
              onClick={() => selectUser({ _id: GENERAL_CHAT_ID })}
            >
              <img src={publicChat} className="h-10 w-10" alt="profile" />
              <div className="flex flex-col">
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Genel Sohbet
                </strong>
                <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                  Bir mesaj yaz..
                </span>
              </div>
            </div>

            {users &&
              users.map((userInfo, key) => (
                <div
                  className={classNames({
                    "flex items-center gap-4 p-4 border-b border-slate-300 cursor-pointer hover:bg-gray-200":
                      true,
                    "bg-green-100": selectedUser._id === userInfo._id + "",
                  })}
                  key={userInfo._id}
                  onClick={() => selectUser({ ...userInfo })}
                >
                  <img
                    src={userInfo.gender === 1 ? woman : man}
                    className="h-10 w-10"
                    alt="profile"
                  />
                  <div className="flex flex-col">
                    <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                      {userInfo.username}
                    </strong>
                    <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                      {userInfo.level}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <div
            id="rightSide"
            className="col-span-3 bg-slate-50 flex flex-col overflow-auto"
          >
            <div id="up" className="border h-20 w-full">
              <div className="flex items-center gap-4 p-4 border-b border-slate-300">
                <div className="flex justify-start items-center">
                  <img
                    src={selectedUser?.gender ? (selectedUser?.gender === 1 ? woman : man) : publicChat}
                    className="h-10 w-10"
                    alt="profile"
                  />
                  <span className="ml-2 mr-3">{selectedUser.username}</span>
                  <span className="ml-1 mr-5">
                    {selectedUser?.gender ? selectedUser.gender === 1 ? (
                      <AiOutlineWoman className="text-pink-500 h-5 w-5"></AiOutlineWoman>
                    ) : (
                      <AiOutlineMan className="text-blue-500 h-5 w-5"></AiOutlineMan>
                    ) : ''}
                  </span>
                  <span>
                    {selectedUser.tags &&
                      selectedUser.tags.map((tag: any, index: any) => (
                        <span
                          className="bg-blue-600 text-white px-2 mr-1 rounded-lg"
                          key={tag._id}
                        >
                          {tag.name}
                        </span>
                      ))}
                  </span>
                </div>
                <div className="text-gray-500 p-2 truncate">
                  {selectedUser.about}
                </div>
              </div>
            </div>

            <div
              id="middle"
              ref={messagesEndRef}
              className="border-2 h-full overflow-auto"
              style={{scrollBehavior: "smooth"}}
            >
              {messages &&
                messages.map((message: any, key: any) => (
                  <div
                    className={classNames({
                      flex: true,
                      "justify-end":
                        message.ownerId === user._id &&
                        message.type === "message",
                      "justify-start":
                        message.ownerId !== user._id &&
                        message.type === "message",
                      "justify-center":
                        message.ownerId !== user._id && message.type === "join",
                    })}
                    key={key}
                  >
                    <span
                      className={classNames({
                        "rounded-lg": true,
                        "p-2 m-2": message.type === "message",
                        "p-1 m-1 text-xs bg-slate-300 text-white": message.type === "join",
                        "bg-blue-200 text-[#252424]":
                          message.ownerId === user._id && message.type === "message",
                        "bg-[#ededed] text-[#252424]":
                          message.ownerId !== user._id && message.type === "message",
                      })}
                    >
                      {message.text}
                    </span>
                  </div>
                ))}
            </div>

            <div id="down" className="border h-16 w-full">
              <div className="flex">
                <label className="block w-full">
                  <input
                    ref={inputMessageRef}
                    placeholder="Bir mesaj yaz.."
                    className={classNames({
                      "w-full border-b outline-none focus:border-slate-400 p-3 rounded":
                        true,
                    })}
                    onKeyDown={handleKeyPress}
                  />
                </label>
                <button
                  onClick={(e) =>
                    setInputMessage(inputMessageRef.current.value)
                  }
                  className="text-white bg-slate-600 p-3"
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
