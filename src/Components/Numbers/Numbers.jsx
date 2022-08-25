import React from "react";
import './Numbers.scss'

const Numbers = () => {
  return (
    <div className="numbers">
      <div className="numbers__container">
        <div className="card">
          <div className="num">
            <h1>7</h1>
          </div>
          <div className="des">
            <p>years of experience</p>
          </div>
        </div>
        <div className="card">
          <div className="num">
            <h1>10k+</h1>
          </div>
          <div className="des">
            <p>mamnun mijozlar</p>
          </div>
        </div>
        <div className="card">
          <div className="num">
            <h1>10</h1>
          </div>
          <div className="des">
            <p>yillik kafolat</p>
          </div>
        </div>
        <div className="card">
          <div className="num">
            <h1>3</h1>
          </div>
          <div className="des">
            <p>kunda yetkazish</p>
          </div>
        </div>
      </div>
        <h1 className="another">Bizning mahsulotlar</h1>
    </div>
  );
};

export default Numbers;
