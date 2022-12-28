import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";

import man from "../assets/man.png";
import woman from "../assets/woman.png";
import classNames from "classnames";

import useMessageStore from "../store/message"

const Messages = () => {
  const { messages, setAllMessages, selectedUserId, setSelectedUserId, addMessage, destroyAllMessages } = useMessageStore(state => state)
  const selectUser = (key) => {
    setSelectedUserId(key)
  }

  return (
    <>
      <Helmet>
        <title>Messages</title>
      </Helmet>

      <PageTitle title="Messages" bgColor="#86efac" color="#584b85"></PageTitle>
      {selectedUserId}

      <div id="chatBox" className="bg-gray-200 w-full h-3/4 rounded-lg">
        <div className="grid grid-cols-4 h-full">
          <div id="leftSide" className="col-span-1 rounded bg-slate-100 flex flex-col overflow-auto">

            <div className="flex items-center gap-4 p-4 border-b border-slate-300 cursor-pointer hover:bg-gray-200" onClick={() => selectUser(-1)}>
              <img src={man} className="h-10 w-10" alt="profile" />
              <div className="flex flex-col">
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                  Genel Chat
                </strong>
                <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                  Genel
                </span>
              </div>
            </div>
            

            {[...Array(10)].map((value, key) => (
              <div className={classNames({
                "flex items-center gap-4 p-4 border-b border-slate-300 cursor-pointer hover:bg-gray-200": true,
                "bg-green-100": +selectedUserId === +key
              })} key={key} onClick={() => selectUser(key)}>
                <img src={man} className="h-10 w-10" alt="profile" />
                <div className="flex flex-col">
                  <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                    Ray Flint
                  </strong>
                  <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                    Technical Advisor
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div id="rightSide" className="col-span-3 bg-slate-50 flex flex-col overflow-auto">
            <div id="up" className="border h-20 w-full">
              <div className="flex items-center gap-4 p-4 border-b border-slate-300">
                <img src={man} className="h-10 w-10" alt="profile" />

                <div className="flex flex-col">
                  <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                    Genel Chat
                  </strong>

                  <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                    Genel
                  </span>
                </div>
              </div>
            </div>
            <div id="middle" className="border h-full">Middle</div>
            <div id="down" className="border h-16 w-full">
              <div className="flex gap-2">
                <label className="block w-full">
                  <input
                    placeholder="Bir mesaj yaz.."
                    className={classNames({
                      "w-full border-b outline-none focus:border-slate-400 p-3 rounded":
                        true,
                    })}
                    onChange={(e) => {}}
                  />
                </label>
                <button className="text-white bg-slate-600 p-3">Gönder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
