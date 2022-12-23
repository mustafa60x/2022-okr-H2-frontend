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

      <button onClick={ () => showModalHandler() }>showModalHandler</button>

      { modalIsShown && <Modal onClose={hideModalHandler}>
        <h3>My Test Modal</h3>
        mustafa türköz
      </Modal> }

      
    </div>
  );
};

export default Community;
