import React from "react";
import "./VendingMachine.css";

export const VendingMachine = () => {
  return (
    <div className="vending-machine">
      <div className="vending-machine-top">
        <div className="vending-machine-sodas">
          <div class="parent">
            <div class="div1">
              <img
                className="vending-machine-sodas-logo"
                src="https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg"
                alt=""
              ></img>
              <label className="text">Cant:12 Cuesta: 500</label>
            </div>
            <div class="div2">
              <img
                className="vending-machine-sodas-logo"
                src="https://brandemia.org/contenido/subidas/2011/03/pepsi-a-traves-de-la-historia.jpg"
                alt=""
              ></img>
              <label className="text">Cant:12 Cuesta: 500</label>
            </div>
            <div class="div3">
              <img
                className="vending-machine-sodas-logo"
                src="https://turbologo.com/articles/wp-content/uploads/2020/02/Fanta-logo.png"
                alt=""
              ></img>
              <label className="text">Cant:12 Cuesta: 500</label>
            </div>
            <div class="div4">
              <img
                className="vending-machine-sodas-logo"
                src="https://brandemia.org/contenido/subidas/2022/05/nueva-identidad-visual-de-sprite-2022.png"
                alt=""
              ></img>
              <label className="text">Cant:12 Cuesta: 500</label>
            </div>
          </div>
        </div>
        <div className="vending-machine-panel">
          <button className="choose-btn">Elegir</button>
          <div className="vending-machine-cost-panel"></div>
          <button className="pay-btn">Pagar</button>
        </div>
      </div>
      <div className="vending-machine-dispenser"></div>
    </div>
  );
};
