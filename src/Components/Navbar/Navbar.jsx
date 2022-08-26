import React, { useContext } from "react";
import "./Navbar.scss";
import Logo from "../../img/logo.png";
import Call from "../../img/Call.png";
import { Link } from "react-router-dom";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import { MyContext } from "../../Context/Context";
const Navbar = () => {
  const { setOpen, handleOpen, handleClose } = useContext(MyContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-left">
          <img src={Logo} alt="" />
          <Zoom>
            <h3>Matrassue</h3>
          </Zoom>
        </div>
        <div className="nav-right">
          <div className="right-top">
            <Roll cascade>
              <ul>
                <li>
                  <a href="#katalog">Katalog</a>
                </li>
                <li>
                  <a href="#katalog">Aksiya</a>
                </li>
                <li>
                  <a href="#about">Biz haqimizda</a>
                </li>
                <li>
                  <a href="#address">Manzilimiz</a>
                </li>
                <li>
                  <a href="#contact">Aloqa</a>
                </li>
                <li>
                  <Link to="/admin">
                    <h3>Admin Panel</h3>
                  </Link>
                </li>
              </ul>
            </Roll>
          </div>
          <div className="right-bottom">
            <img src={Call} alt="" />
            <p>+998 90 123 45 67</p>
            <LightSpeed>
              <button className="nav-btn" onClick={handleOpen}>
                Buyurtma berish
              </button>
            </LightSpeed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
