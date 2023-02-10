import React from "react";

import Header from "../components/Header";
import ListNumber from "../components/ListNumber";

import Foters from "../components/Foters";

const MissedCall = () => {
  return (
    <div>
      <Header  />
      <h1 className="container my-5" style={{color:"red"}}>Cevapsız aramalar  </h1>
      <div >
        <ListNumber  />
      <Foters/>
      </div>
    </div>
  );
};

export default MissedCall;
