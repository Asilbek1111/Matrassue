import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <MyContext.Provider value={{ open, setOpen, handleOpen, handleClose }}>
      {children}
    </MyContext.Provider>
  );
};
