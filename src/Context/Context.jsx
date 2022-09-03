import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [link, setLink] = useState();
  const [pname, setPname] = useState();

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function additem(){
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <MyContext.Provider
      value={{
        open,
        setOpen,
        handleOpen,
        handleClose,
        modalIsOpen,
        setIsOpen,
        openModal,
        closeModal,
        link,
        setLink,
        pname,
        setPname,
        additem
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
