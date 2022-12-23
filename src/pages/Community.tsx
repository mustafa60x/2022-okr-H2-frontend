import classNames from "classnames";
import { useState } from "react";
import Modal from "../components/UI/Modal";

const Community = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <div>
      <h1>Community</h1>

      <button onClick={() => showModalHandler()}>showModalHandler</button>

      {modalIsShown && (
        <Modal onClose={hideModalHandler}>
          <h3>My Test Modal</h3>
          mustafa türköz
        </Modal>
      )}

      <div className="bg-red-500">
        <button
          className={classNames({
            "py-4 px-3 m-3 text-white/90 bg-green-400 hover:bg-red-600": true,
            "bg-yellow-400": modalIsShown === true,
          })}
        >
          Button
        </button>

        <h3 className="text-xl font-semibold text-gray-100">Tailwind Başlık</h3>
      </div>
    </div>
  );
};

export default Community;
