import React from "react";

import Header from "../components/Header";

import ListNumber from "../components/ListNumber";
import Foters from "../components/Foters";
const LastCall=()=>{
    return(
        <div>
          <Header />
          <h1 className="container my-5" style={{color:"green"}}>Son aranan numarlar </h1>
          <ListNumber/>
          <Foters/>
        </div>
    )
}

export default LastCall