import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Facebook from "../../img/Facebook.png";
import Twitter from "../../img/Twitter.png";
import Vimeo from "../../img/Vimeo.png";
import YouTube from "../../img/Youtube.png";
import Mark from "../../img/vizitka.png";
import Mask from "../../img/Mask.png";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="top">
          <ul>
            <li>
              <Link to="/">Biz haqimizda</Link>
            </li>
            <li>
              <Link to="/">Katalog</Link>
            </li>
            <li>
              <Link to="/">Aksiya</Link>
            </li>
            <li>
              <Link to="/">Manzilimiz</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/">
                <img src={Facebook} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={Twitter} alt="" />
              </Link>
            </li>{" "}
            <li>
              <Link to="/">
                <img src={Vimeo} alt="" />
              </Link>
            </li>{" "}
            <li>
              <Link to="/">
                <img src={YouTube} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <p>© 2021 Mattrassue. Barcha huquqlar himoyalangan.</p>
          <Zoom bottom>
            <img
              className="mask"
              src={Mask}
              alt=""
              onClick={() => window.scrollTo({ top: 0 })}
            />
          </Zoom>
          <img src={Mark} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
