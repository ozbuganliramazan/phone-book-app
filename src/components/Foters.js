import React from "react";

import clock from "../assets/imgs/clock.gif";
import star from "../assets/imgs/star.gif";
import user from "../assets/imgs/user.gif";
import keys from "../assets/imgs/keys.png";
import ses from "../assets/imgs/ses.png";

import "../assets/styles/footers.css";
import { useNavigate } from "react-router-dom";

const Foters = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="socialMedia">
        <img src={star} onClick={() => navigate("/add-number")} />

        <img src={clock} onClick={() => navigate("/lastCall")} />
        <img src={user} onClick={() => navigate("/")} />
        <img src={keys} onClick={() => navigate("/add-number")} />
        <img src={ses} onClick={() => navigate("/add-mesager")} />
      </div>
    </div>
  );
};

export default Foters;
