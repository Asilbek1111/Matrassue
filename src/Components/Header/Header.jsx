import React from "react";
import Arrow from "../../img/arrow.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BigImg from "../../img/bigImg.png";
import "./Header.scss";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="left">
          <Fade left>
            <h1>Kechalari sokin dam oling</h1>
          </Fade>
          <Flip left>
            <button>
              Kategoriyalar <img src={Arrow} alt="" />
            </button>
          </Flip>
        </div>
        <div className="right">
          <Bounce left>
            <Carousel
              width="90%"
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img className="big-img" src={BigImg} />
              </div>
              <div>
                <img className="big-img" src={BigImg} />
              </div>
              <div>
                <img className="big-img" src={BigImg} />
              </div>
            </Carousel>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default Header;
