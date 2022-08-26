import React from "react";
import "./Address.scss";
import CaroImg from "../../img/carousel.png";
import Location from "../../img/Location.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide from "react-reveal/Slide";

const Address = () => {
  return (
    <div className="address" id="address">
      <Slide top cascade>
        <div className="address__container">
          <div className="left">
            <div className="wrap">
              <h1>Manzilimiz</h1>
              <h3>Toshkent, Parkent ko'chasi, 176-uy</h3>
              <p>
                Mo'ljal: Qoraqamish 2/1, Tursunxodjayeva ro'parasi, Milliy bog'
                metro bekati.
              </p>
              <button>
                <img src={Location} /> Geolokatsiya
              </button>
            </div>
          </div>
          <div className="right">
            <Carousel
              width="60%"
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src={CaroImg} />
              </div>
              <div>
                <img src={CaroImg} />
              </div>
              <div>
                <img src={CaroImg} />
              </div>
            </Carousel>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Address;
