import React from "react";
import "./Tech.scss";

const Tech = () => {
  return (
    <div className="tech">
      <h1>Ishlab chiqarish texnologiyalari</h1>
      <div className="tech__container">
        <div className="t-card">
          <div className="title">
            <h3>Memoriform</h3>
          </div>

          <div className="frame">
            <iframe
              width="400"
              height="255"
              src="https://www.youtube.com/embed/g4aAHqfQBvY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="btm">
            <p>
              Lectus pellentesque senectus elit donec massa ipsum ultricies dui.
              Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            </p>
          </div>
        </div>
        <div className="t-card">
          <div className="title">
            <h3>Tabiiy lateks</h3>
          </div>

          <div className="frame">
            <iframe
              width="400"
              height="255"
              src="https://www.youtube.com/embed/oYBCAl4sitk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="btm">
            <p>
              Lectus pellentesque senectus elit donec massa ipsum ultricies dui.
              Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            </p>
          </div>
        </div>
        <div className="t-card">
          <div className="title">
            <h3>Mustaqil prujina</h3>
          </div>

          <div className="frame">
            <iframe
              width="400"
              height="255"
              src="https://www.youtube.com/embed/IXLsZKiHcQw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="btm">
            <p>
              Lectus pellentesque senectus elit donec massa ipsum ultricies dui.
              Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
