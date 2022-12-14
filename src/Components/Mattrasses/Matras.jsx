import React, { useContext, useEffect, useState } from "react";
import Matrass from "../../img/mattrass.png";
import Cart from "../../img/cart.png";
import "./Matras.scss";
import { MyContext } from "../../Context/Context";
const Matras = () => {
  const { handleOpen } = useContext(MyContext);
  const [matras, setMatras] = useState([]);

  useEffect(() => {
    fetch("https://130.185.119.101:3000/articles/")
      .then((res) => res.json())
      .then((data) => setMatras(data));
  }, [matras]);

  return (
    <div className="matras" id="katalog">
      <div className="matras__container">
        {matras.map((item) => (
          <div className="item">
            <div className="item__left">
              <img src={item.title} alt="" />
            </div>
            <div className="item__right">
              <h1>{item.content}</h1>
              <div className="item-wrap">
                <div className="lcard">
                  <div className="l-top">
                    <h3>Yuklama</h3>
                  </div>
                  <div className="l-bottom">
                    <p>150kg</p>
                  </div>
                </div>
                <div className="lcard">
                  <div className="l-top">
                    <h3>Kafolat</h3>
                  </div>
                  <div className="l-bottom">
                    <p>3yil</p>
                  </div>
                </div>
                <div className="lcard">
                  <div className="l-top">
                    <h3>O'lchami</h3>
                  </div>
                  <div className="l-bottom">
                    <p>100x120x40</p>
                  </div>
                </div>
                <div className="lcard">
                  <div className="l-top">
                    <h3>Sig'imi</h3>
                  </div>
                  <div className="l-bottom">
                    <p>1 kishi</p>
                  </div>
                </div>
              </div>
              <p>
                Penatibus viverra gravida rhoncus in. At turpis morbi ante
                tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut
                urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac
                dictum varius egestas.
              </p>
              <p>Narxi:</p>
              <div className="row1">
                <h2>1699900</h2>
                <span>so'm</span>
              </div>

              <button onClick={handleOpen}>
                Buyurtma berish <img src={Cart} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matras;
