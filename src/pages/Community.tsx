import { useEffect, useState } from "react";
// import Modal from "../components/UI/Modal";

import {UserService} from "../services";

import { Helmet } from "react-helmet"
import PageTitle from "../components/PageTitle";

import man from "../assets/man.png"
import woman from "../assets/woman.png"

import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai"
import { BsFillChatLeftTextFill } from "react-icons/bs"

const Community = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [users, setUsers] = useState([]);

  /* const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  }; */

  const sendMessage = () => {
    alert('meesage')
  }

  
  useEffect(() => {
    UserService.getUsers().then((data: any) => setUsers(data))
  }, [])

  return (
    <div>
      <Helmet>
        <title>Community</title>
        {/* <meta name="description" content="community description"/> */}
      </Helmet>

      <PageTitle title="Community" bgColor="#ffe34c " color="#191500"></PageTitle>

      {/* <div className="bg-gray-400 py-4 my-4">
        <p>{process.env.NODE_ENV}</p>
        <p>{import.meta.env.VITE_APP_API_URL}</p>
      </div> */}


      <div>
        <ul>
          {users && users.map((user: any) => (
            <li key={user._id} className="border-[#584b85] border p-2 h-20 my-2 flex justify-between items-center rounded-lg">
              <div className="flex justify-start items-center">
                <img  src={user.gender === 1 ? woman : man} className="h-10 w-10" alt="profile"/>
                <span className="ml-2 mr-3">{user.username}</span>
                <span className="ml-1 mr-5">{user.gender === 1 ? <AiOutlineWoman className="text-pink-500 h-5 w-5"></AiOutlineWoman> : <AiOutlineMan className="text-blue-500 h-5 w-5"></AiOutlineMan>}</span>
                <span>
                  {user.tags && user.tags.map((tag: any, index: any) => (
                    <span className="bg-blue-600 text-white px-2 mr-1 rounded-lg" key={tag._id}>{tag.name}</span>
                  ))}
                </span>
              </div>

              <div>
                <BsFillChatLeftTextFill onClick={sendMessage} className="h-7 w-7 cursor-pointer text-green-500"></BsFillChatLeftTextFill>
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
