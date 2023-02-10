import React from "react";


const Search =()=>{
    return(
        <div className="container my-5">
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Ara" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Ara</button>
      </form>
        </div>
    )
}

export default Search