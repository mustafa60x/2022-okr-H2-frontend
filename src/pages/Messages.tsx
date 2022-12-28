import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";

import man from "../assets/man.png";
import woman from "../assets/woman.png";
import classNames from "classnames";

import useMessageStore from "../store/message";
import useUserStore from "../store/user";

import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const Messages = () => {
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

  const {
    user
  }: { user: any } = useUserStore((state) => state);

  const [inputMessage, setInputMessage] = useState("");

  const inputMessageRef = useRef(null);

  const selectUser = (key) => {
    if (key._id !== user._id) {
      setSelectedUser(key);
      destroyAllMessages()
    }
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      setInputMessage(inputMessageRef.current.value)
    }
  }

  useEffect(() => {
    inputMessageRef.current.value = ''
    inputMessageRef.current.focus()
  
    const identifier = setTimeout(() => {

      if(inputMessage) {
        addMessage({ownerId: user._id, text: inputMessage})
        // socket send message
        // mesaj socket'e gider ve orada database'e yazılır, sonra kullanıcılara mesaj gönderilir ve ekrana basılır
        
        setInputMessage('')
      }
      
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [inputMessage]);

  return (
    <>
      <Helmet>
        <title>Mesajlar</title>
      </Helmet>

      <PageTitle title="Mesajlar" bgColor="#86efac" color="#584b85"></PageTitle>

      <div id="chatBox" className="bg-gray-200 w-full h-3/4 rounded-lg">
        <div className="grid grid-cols-4 h-full">
          <div
            id="leftSide"
            className="col-span-1 rounded bg-slate-100 flex flex-col overflow-auto border border-slate-300"
          >
            <div
              className={classNames({
                "flex items-center gap-4 p-4 border-b border-slate-300 cursor-pointer hover:bg-gray-200":
                  true,
                "bg-green-100": selectedUser._id === "000111",
              })}
              onClick={() => selectUser({ _id: "000111" })}
            >
              <img src={man} className="h-10 w-10" alt="profile" />
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
                    src={selectedUser?.gender === 1 ? woman : man}
                    className="h-10 w-10"
                    alt="profile"
                  />
                  <span className="ml-2 mr-3">{selectedUser.username}</span>
                  <span className="ml-1 mr-5">
                    {selectedUser.gender === 1 ? (
                      <AiOutlineWoman className="text-pink-500 h-5 w-5"></AiOutlineWoman>
                    ) : (
                      <AiOutlineMan className="text-blue-500 h-5 w-5"></AiOutlineMan>
                    )}
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
                <div className="text-gray-500 p-2 truncate">{selectedUser.about}</div>
              </div>
            </div>

            <div id="middle" className="border h-full overflow-auto">
              {messages && messages.map((message: any, key: any) => (
                <div className={classNames({
                  "flex": true,
                  "justify-end": message.ownerId === user._id,
                  "justify-start": message.ownerId !== user._id,
                })} key={key}>
                  <span className={classNames({
                    "p-2 m-2 rounded-lg": true,
                    "bg-blue-200 text-[#252424]": message.ownerId === user._id,
                    "bg-[#ededed] text-[#252424]": message.ownerId !== user._id,
                  })}>{message.text}</span>
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
                <button onClick={(e) => setInputMessage(inputMessageRef.current.value)} className="text-white bg-slate-600 p-3">Gönder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
