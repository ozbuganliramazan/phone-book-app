import React from "react";
import Header from "../components/Header";
import ListNumber from "../components/ListNumber";
import Search from "../components/search";
import Foters from "../components/Foters";
const Home =()=>{
return(
    <div>
    <Header/>
    <Search/>
    <ListNumber/>
  <Foters/>
    </div>
)
}

export default Home