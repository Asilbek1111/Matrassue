import React, { useState } from "react";
import "./ProductAdd.scss";
import Pencil from "../../img/pencil.png";
import Trash from "../../img/trash.png";

const ProductAdd = () => {
  const [items, setItems] = useState([]);

  fetch("http://130.185.119.101:3000/articles/")
    .then((response) => response.json())
    .then((result) => setItems(result))
    .catch((error) => console.log("error", error));
  return (
    <div className="add">
      <div className="table">
        <div className="container">
          <ul className="head-ul">
            <li>Mahsulot</li>
            <li>Toifalar</li>
            <li>Narxi</li>
            <li>Yuklama</li>
            <li>O'lchami</li>
            <li>Status</li>
          </ul>
          {items.map((item) => (
            <ul className="body-ul">
              <li>{item.content}</li>
              <li>Model C</li>
              <li>1 600 000 so'm</li>
              <li>150kg</li>
              <li>200 x 134 x 40</li>
              <li>
                <input type="checkbox" />
              </li>
              <li className="lli l-first-li">
                <img src={Pencil} alt="" />
              </li>
              <li className="lli l-sec-li">
                <img src={Trash} alt="" />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
