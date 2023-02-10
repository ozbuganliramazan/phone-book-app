import React from "react";
import Header from "../components/Header";

import { Link } from "react-router-dom";


import Foters from "../components/Foters";

const Messager = () => {
  return (
    <div>
      <Header  />
      <div className="container my-5 text-center">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label ">
            Messager
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <Link className="btn btn-success" to={"/"}>
          Gönder
        </Link>
      </div>
      <Foters/>
    </div>
  );
};

export default Messager;
