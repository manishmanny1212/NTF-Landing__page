import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            quis autem. A iusto id iure.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            quis autem. A iusto id iure.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            quis autem. A iusto id iure.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            quis autem. A iusto id iure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Like;
