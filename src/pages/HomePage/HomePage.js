import React from "react";

import "./HomePage.scss";
import cakeData from "../../data/cakedata";

function Home() {
  return (
    <div>
      <div className="head-title">Comfy Bake</div>
      <div></div>
      {cakeData.map((e) => {
        console.log(123);
        return (
          <div key={e.id}>
            <img src={e.image} className="cakedata" alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
