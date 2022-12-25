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

      <button className="p-3 bg-slate-600 text-white" onClick={() => showModalHandler()}>Show Modal</button>

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
