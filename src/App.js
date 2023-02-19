import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MissedCall from "./pages/myMissedCall";
import Messager from "./pages/messager";

import "./assets/styles/app.css";
import EditNumber from "./pages/EditNumber";





import { useDispatch, useSelector } from "react-redux";
import actionTypes from "./redux/actions/actionTypes";
import api from "./api/api";
import urls from "./api/urls";
import AddNumber from "./pages/addNumber";
import LastCall from "./pages/LastCall";




function App() {
  const dispatch = useDispatch();
  const { numberState, categoriesState } = useSelector((state) => state);

  useEffect(() => {
    /* fetch books */
    dispatch({ type: actionTypes.numberActions.GET_NUMBER_START });
    api
      .get(urls.number)
      .then((res) => {
      
        dispatch({
          type: actionTypes.numberActions.GET_NUMBER_SUCCESS,
          payload: res.data,
        });
        
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.numberActions.GET_NUMBER_FAIL,
          payload: "Serverda bir hata oluştu",
        });
      });
    /* fetch categories */
    dispatch({ type: actionTypes.categoryActions.GET_CATEGORIES_START });
    api
      .get(urls.categories)
      .then((res) => {
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_FAIL,
          payload: "Serverda bir hata oluştu",
        });
      });
  }, []);

  if (numberState.success === false || categoriesState.success === false)
    return null;
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add-number" element={<AddNumber/>} />
      <Route path="/my-missed-call" element={<MissedCall/>} />
      <Route path="/add-mesager" element={<Messager/>} />
      <Route path="/lastCall" element={<LastCall/>} />
      <Route path="/edit-number/:editId" element={<EditNumber/>} />
    </Routes>
   
  </BrowserRouter>
 
    </div>
  );
}

export default App;
