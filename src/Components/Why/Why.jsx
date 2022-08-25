import React from "react";
import "./Why.scss";
import Rec2 from "../../img/rec2.png";
import Rec3 from "../../img/rec3.png";
import Rec4 from "../../img/rec4.png";
import Zoom from "react-reveal/Zoom";

const Why = () => {
  return (
    <div className="why">
      <h1>Nega bizni tanlashadi?</h1>
      <Zoom bottom cascade>
        <div className="why__container">
          <div className="card">
            <div className="c-top">
              <img src={Rec2} alt="" />
            </div>
            <div className="c-bottom">
              <h3>Yetkazib berish</h3>
              <p>Toshkent bo'ylab bepul o'lchov va etkazib berish</p>
            </div>
          </div>
          <div className="card">
            <div className="c-top">
              <img src={Rec3} alt="" />
            </div>
            <div className="c-bottom">
              <h3>Qo'llab-quvvatlash</h3>
              <p>
                Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda
                yordam beradi va menejerlarning
              </p>
            </div>
          </div>
          <div className="card">
            <div className="c-top">
              <img src={Rec4} alt="" />
            </div>
            <div className="c-bottom">
              <h3>Kafolat</h3>
              <p>
                Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras
                kamida 25 mm qisqartirilsa.
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Why;
