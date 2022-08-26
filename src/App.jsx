import "./App.scss";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Numbers from "./Components/Numbers/Numbers";
import Types from "./Components/Types/Types";
import { Routes, Route } from "react-router-dom";
import Tech from "./Components/Technologies/Tech";
import About from "./Components/About/About";
import Why from "./Components/Why/Why";
import Address from "./Components/Address/Address";
import Interested from "./Components/Interested/Interested";
import Footer from "./Components/Footer/Footer";
import BasicModal from "./Components/Modal/Modal";
import Login from "./Components/Login/Login";
import AdminP from "./Components/AdminP/AdminP";
import Home from "./Pages/Home/Home";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth";

function App() {
  const {token} = useContext(AuthContext);
if(token){
      return <AdminP />
    }else{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
    </div>
  )}
}

export default App;
