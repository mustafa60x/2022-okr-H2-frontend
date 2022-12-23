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

      <div className="bg-red-500">
        <h3 className="text-xl font-semibold text-gray-400">Tailwind Başlık</h3>

        <button className="text-white/50 bg-green-400 hover:bg-red-600">Button</button>
      </div>
      
    </div>
  );
};

export default Community;
