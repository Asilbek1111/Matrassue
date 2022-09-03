import "./AddM.scss";
import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { MyContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

function AddModal() {
  let navigate = useNavigate();
  let subtitle;
  const { link, setLink, pname, setPname, additem } = useContext(MyContext);

  function inpchange(e) {
    setLink(e.target.value);
  }
  function inp2change(e) {
    setPname(e.target.value);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const { modalIsOpen, setIsOpen, openModal, closeModal } =
    useContext(MyContext);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="myModal2"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <button onClick={closeModal}>X</button> */}
        <div className="mhs">Mahsulot qo'shish</div>
        <form action="http://130.185.119.101:3000/articles/" method="POST">
          <input
            type="text"
            onChange={inpchange}
            placeholder="Rasm linki"
            name="title"
          />
          <input
            type="text"
            onChange={inp2change}
            placeholder="Mahsulot nomi"
            name="content"
          />
          <button type="submit">Qo'shish</button>
        </form>
      </Modal>
    </div>
  );
}
export default AddModal;

// ReactDOM.render(<App />, appElement);
