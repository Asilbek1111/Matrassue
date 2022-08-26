import React from "react";
import Logo from "../../img/logo.png";
import Matrassue from "../../img/Matrassue.png";
import Account from "../../img/account.png";
import "./AdminP.scss";
import { Link } from "react-router-dom";
import Home from '../../img/v8.png';
import User from '../../img/v9.png';
import Blocks from "../../img/v10.png";
import Settings from "../../img/v11.png";
import Cart from "../../img/v12.png";
import Location from "../../img/v13.png";


const AdminP = () => {
  return (
    <div className="admin">
      <div className="bcontainer">
        <nav>
          <div className="nav-container">
            <div className="nlogo">
              <img src={Logo} alt="" />
              <h3>Matrassue</h3>
            </div>
            <div className="navrest">
              <input type="text" placeholder="User" />
              <div className="name">
                <h3>Admin</h3>
              </div>
            </div>
          </div>
        </nav>
        <div className="sidebar">
          <div className="sidebar__container">
            <ul>
              <li>
                <Link to="/">
                  <img src={Home} alt="" />
                  <h3>Buyurtmalar</h3>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={User} alt="" />
                  <h3>Mijozlar</h3>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={Blocks} alt="" />
                  <h3>Toifalar</h3>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={Cart} alt="" />
                  <h3>Mahsulotlar</h3>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={Settings} alt="" />
                  <h3>Texnologiyalar</h3>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={Location} alt="" />
                  <h3>Manzil</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminP;
