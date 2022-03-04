import React from "react";
import client1 from "../assets/clients1.png"
import client2 from "../assets/clients2.png"
import client3 from "../assets/clients3.png"
import client4 from "../assets/clients4.png"
import client5 from "../assets/clients5.png"

function Clints() {
  const data=[client1,client2,client3,client4,client5];
  return (
    <div className="clients">
      <div className="container">
        <div className="client-container">{data.map((client,index)=>
        <div className="client">
          <img src={client} alt="client"  key={index}/>
        </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Clints;
