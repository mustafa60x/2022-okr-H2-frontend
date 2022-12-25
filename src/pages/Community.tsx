import { useEffect, useState } from "react";
import Modal from "../components/UI/Modal";

import {PostService, UserService} from "../services";

const Community = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [users, setUsers] = useState([]);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const addPost = data => {
    /* const headers = new Headers()
    headers.append('Content-type', 'application/json')
    headers.append('Authorization', 'Bearer 1231232') */

    PostService.newPost(data).then((res: any) => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  
  useEffect(() => {
    UserService.getUsers().then((data: any) => setUsers(data))

    addPost({
      userId: 1,
      title: 'Örnek Post',
      body: 'Post içeriği'
    })
  }, [])

  return (
    <div>
      <h1>Community</h1>
      <div className="bg-gray-400 py-4 my-4">
        <p>{process.env.NODE_ENV}</p>
        <p>{import.meta.env.VITE_APP_API_URL}</p>
      </div>

      <button className="p-3 bg-slate-600 text-white" onClick={() => showModalHandler()}>Show Modal</button>

      <div>
        <ul>
          {users && users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <div>
        {modalIsShown && (
          <Modal onClose={hideModalHandler}>
            <h3>My Test Modal</h3>
            mustafa türköz
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Community;
