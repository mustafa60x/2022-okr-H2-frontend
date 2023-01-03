import { useEffect, useState } from "react";
// import Modal from "../components/UI/Modal";

import { UserService } from "../services";

import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";

import man from "../assets/man.png";
import woman from "../assets/woman.png";

import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BsFillChatLeftTextFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { FiCheck } from "react-icons/fi";

import useUserStore from "../store/user";
import useSiteStore from "../store/site";
import useMessageStore from "../store/message";

const Community = ({ socket }) => {
  const levels = [
    { key: "jr", value: "Jr. Developer" },
    { key: "sr", value: "Sr. Developer" },
    { key: "ninja", value: "Ninja" },
  ];
  const navigate = useNavigate();
  // const [modalIsShown, setModalIsShown] = useState(false);
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState(0);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [search, setSearch] = useState("");

  // Stores
  const { user }: { user: any } = useUserStore((state) => state);
  const { setLoading } = useSiteStore((state) => state);
  const {
    messages,
    setAllMessages,
    selectedUser,
    setSelectedUser,
    setSelectedRoom,
    addMessage,
    destroyAllMessages,
    addUser,
  } = useMessageStore((state) => state);

  const selectLevel = (selectedLevel) => {
    // Yoksa ekle, varsa çıkar
    const foundedLevel = selectedLevels.find(
      (level: any) => level === selectedLevel
    );

    if (foundedLevel) {
      setSelectedLevels((prev) => [
        ...prev.filter((item) => item !== foundedLevel),
      ]);
    } else {
      setSelectedLevels((prev) => [...prev, selectedLevel]);
    }
  };

  const selectGender = (e) => {
    setGender(e.target.value);
  };

  const sendMessage = async (user) => {
    // TODO message yaz ve sonra messages sayfasına git
    // TODO seçilenin id'sini storeda tut ve message sayfasında tekrar kullan
    console.log(user);

    // INFO: istek at, daha önce konuşma yoksa yeni konuşma oluştur.
    socket.emit("start_chat", user, (room) => {
      if (room) {
        setSelectedUser({ ...user });
        setSelectedRoom({ ...room });
        // addUser(user);
        navigate("/messages");
      }
    });
  };

  const openProfileDetail = (user) => {
    navigate(`/profile/${user._id}`);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setLoading(true);
      useSiteStore.setState((state) => ({ isLoading: true }));
      UserService.searchUsers({ search, levels: selectedLevels, gender }).then(
        (data: any) => {
          setUsers(data);
          setLoading(false);
        }
      );
    }, 500);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [search, selectedLevels, gender]);

  useEffect(() => {
    console.log('community')
    // UserService.getUsers().then((data: any) => setUsers(data))
  }, [])

  return (
    <div>
      <Helmet>
        <title>Topluluk</title>
        {/* <meta name="description" content="community description"/> */}
      </Helmet>

      <PageTitle
        title="Topluluk"
        bgColor="#ffe34c "
        color="#584b85"
      ></PageTitle>

      {/* <div className="bg-gray-400 py-4 my-4">
        <p>{process.env.NODE_ENV}</p>
        <p>{import.meta.env.VITE_APP_API_URL}</p>
      </div> */}

      <div className="flex justify-between mb-5 border-b-2 p-2">
        <label className="block w-36">
          <select
            className="w-full h-10 border-b outline-none focus:border-black rounded"
            onChange={selectGender}
            defaultValue={0}
          >
            {[
              { key: 0, value: "Hepsini Seç" },
              { key: 1, value: "Kadın" },
              { key: 2, value: "Erkek" },
            ].map((option: any, key: any) => (
              <option value={option.key} key={key}>
                {option.value}
              </option>
            ))}
          </select>
        </label>

        <div className="flex gap-2">
          {levels &&
            levels.map((option: any, key: any) => (
              <label
                className="flex gap-x-2 text-sm cursor-pointer items-center"
                key={option.key}
              >
                <button
                  onClick={() => selectLevel(option.key)}
                  className={classNames({
                    "w-5 h-5 rounded transition-all border flex items-center justify-center":
                      true,
                    "border-slate-500 text-transparent":
                      !selectedLevels.includes(option.key),
                    "border-blue-600 bg-blue-600 text-white":
                      selectedLevels.includes(option.key),
                  })}
                >
                  <FiCheck size={16}></FiCheck>
                </button>
                {option.value}
              </label>
            ))}
        </div>

        <label className="block w-96">
          <input
            placeholder="Kullanıcı adı ara.."
            className={classNames({
              "w-full h-10 border-b outline-none focus:border-black p-3 rounded":
                true,
            })}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div>
        <ul>
          {users &&
            users.map((userItem: any) => (
              <li
                key={userItem._id}
                className="border-slate-400 border p-2 h-20 my-2 flex justify-between items-center rounded-lg"
              >
                <div className="flex justify-start items-center">
                  <span
                    onClick={() => openProfileDetail(userItem)}
                    className="flex justify-start items-center cursor-pointer"
                  >
                    <img
                      src={userItem.gender === 1 ? woman : man}
                      className="h-10 w-10"
                      alt="profile"
                    />
                    <span className="ml-2 mr-3">
                      {userItem.username}{" "}
                      <span className="text-xs bg-red-100 px-1 rounded">
                        {userItem.level}
                      </span>
                    </span>
                  </span>
                  <span className="ml-1 mr-5">
                    {userItem.gender === 1 ? (
                      <AiOutlineWoman className="text-pink-500 h-5 w-5"></AiOutlineWoman>
                    ) : (
                      <AiOutlineMan className="text-blue-500 h-5 w-5"></AiOutlineMan>
                    )}
                  </span>
                  <span>
                    {userItem.tags &&
                      userItem.tags.map((tag: any, index: any) => (
                        <span
                          className="bg-blue-600 text-white px-2 mr-1 rounded-lg"
                          key={tag._id}
                        >
                          {tag.name}
                        </span>
                      ))}
                  </span>
                </div>

                <div>
                  {user._id !== userItem._id && (
                    <BsFillChatLeftTextFill
                      onClick={() => sendMessage(userItem)}
                      className="h-7 w-7 cursor-pointer text-green-500"
                    ></BsFillChatLeftTextFill>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* <button className="p-3 bg-slate-600 text-white" onClick={() => showModalHandler()}>Show Modal</button>
      <div>
        {modalIsShown && (
          <Modal onClose={hideModalHandler}>
            <h3>My Test Modal</h3>
            mustafa türköz
          </Modal>
        )}
      </div> */}
    </div>
  );
};

export default Community;
