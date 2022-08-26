import React from "react";
import Logo from "../../img/logo.png";
import Matrassue from "../../img/Matrassue.png";
import Account from "../../img/account.png";
import "./AdminP.scss";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "../../img/v8.png";
import User from "../../img/v9.png";
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
        <div className="two">
          <div className="sidebar">
            <div className="sidebar__container">
              <ul>
                <li>
                  <Link to="/buyurtmalar">
                    <img src={Home} alt="" />
                    <h3>Buyurtmalar</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/mijozlar">
                    <img src={User} alt="" />
                    <h3>Mijozlar</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/toifalar">
                    <img src={Blocks} alt="" />
                    <h3>Toifalar</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/mahsulotlar">
                    <img src={Cart} alt="" />
                    <h3>Mahsulotlar</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/texnologiyalar">
                    <img src={Settings} alt="" />
                    <h3>Texnologiyalar</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/manzil">
                    <img src={Location} alt="" />
                    <h3>Manzil</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="content">
            <h1>Hellooooo</h1>
            <Routes>
              <Route path="/buyurtmalar">
                <Route
                  index
                  element={
                    <>
                      <ul>
                        <li>row1</li>
                        <li>row1</li>
                        <li>row1</li>
                        <li>row1</li>
                      </ul>
                    </>
                  }
                />
              </Route>

              <Route path="/mijozlar">
                <Route
                  index
                  element={
                    <>
                      <ul>
                        <li>row2</li>
                        <li>row2</li>
                        <li>row2</li>
                        <li>row2</li>
                      </ul>
                    </>
                  }
                />
              </Route>

              <Route path="/toifalar">
                <Route
                  index
                  element={
                    <>
                      <ul>
                        <li>row3</li>
                        <li>row3</li>
                        <li>row3</li>
                        <li>row3</li>
                      </ul>
                    </>
                  }
                />
              </Route>

              <Route path="/mahsulotlar">
                <Route
                  index
                  element={
                    <>
                      <ul>
                        <li>row4</li>
                        <li>row4</li>
                        <li>row4</li>
                        <li>row4</li>
                      </ul>
                    </>
                  }
                />
              </Route>

              <Route path="/texnologiyalar">
                <Route
                  index
                  element={
                    <>
                      <ul>
                        <li>row5</li>
                        <li>row5</li>
                        <li>row5</li>
                        <li>row5</li>
                      </ul>
                    </>
                  }
                />
              </Route>

              <Route path="/manzil">
                <Route
                  index
                  element={
                    <>
                      <ul>
                        <li>row6</li>
                        <li>row6</li>
                        <li>row6</li>
                        <li>row6</li>
                      </ul>
                    </>
                  }
                />
              </Route>
            </Routes>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminP;
