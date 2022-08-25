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


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Numbers />
      <Types />
      <Tech />
      <About />
      <Why />
      <Address />
      <Interested />
      <Footer />
    </div>
  );
}

export default App;
