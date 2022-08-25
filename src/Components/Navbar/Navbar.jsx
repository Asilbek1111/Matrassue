import React from "react";
import "./Navbar.scss";
import Logo from "../../img/logo.png";
import Call from "../../img/Call.png";
import { Link } from "react-router-dom";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
const Navbar = () => {
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
                  <Link to="#">Katalog</Link>
                </li>
                <li>
                  <Link to="#">Aksiya</Link>
                </li>
                <li>
                  <Link to="#">Biz haqimizda</Link>
                </li>
                <li>
                  <Link to="#">Manzilimiz</Link>
                </li>
                <li>
                  <Link to="#">Aloqa</Link>
                </li>
              </ul>
            </Roll>
          </div>
          <div className="right-bottom">
            <img src={Call} alt="" />
            <p>+998 90 123 45 67</p>
            <LightSpeed>
              <button className="nav-btn">Buyurtma berish</button>
            </LightSpeed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
