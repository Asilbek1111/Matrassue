import React from "react";
import "./Interested.scss";
import Zoom from "react-reveal/Zoom";

const Interested = () => {
  return (
    <div className="interested">
      <Zoom left cascade>
        <div className="interested__container">
          <div className="left">
            <h1>Sizni qiziqtirdimi?</h1>
            <p>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
          </div>
          <div className="right">
            <p>+998</p>
            <input type="text" placeholder="| Raqamingizni yozing" />
            <button>Yuborish</button>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Interested;
