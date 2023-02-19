import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import urls from "../api/urls";
import editIcon from "../assets/imgs/editIcon.gif";
import phone from "../assets/imgs/phone.gif";
import video from "../assets/imgs/video.gif";

import les from "../assets/imgs/les.gif";
import deleteIcon from "../assets/imgs/deleteIcon.gif";
import mesa from "../assets/imgs/mesa.gif";
import actionTypes from "../redux/actions/actionTypes";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const ListNumber = () => {
  const naviget = useNavigate();
  const dispatch = useDispatch();
  const { numberState } = useSelector((state) => state);
  const [call, setCall] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [findeNumber, setFindeNumber] = useState(numberState.number);

  useEffect(() => {
    const temp = numberState.number.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) === true ||
        item.lastname.toLowerCase().includes(searchText.toLowerCase()) === true
    );
    setFindeNumber(temp);
  }, [searchText]);

  const deleteNumber = (id) => {
    dispatch({ type: actionTypes.numberActions.DELETE_NUMBER_START });
    api
      .delete(`${urls.number}/${id}`)
      .then((res) => {
        dispatch({
          type: actionTypes.numberActions.DELETE_NUMBER_SUCCESS,
          payload: id,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.numberActions.DELETE_NUMBER_FAIL,
          payload: "Kitap silerken hata oluştu",
        });
      });
  };

  return (
    <div className=" my-5">
      <div className="d-flex justify-content-center my-5">
        <input
          className="form-control w-75 "
          type="text"
          placeholder="Aramak istediğiniz kişi ismini girin..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sıra No</th>
            <th scope="col">Adı</th>
            <th scope="col">Soyadı</th>
            <th scope="col">Telefon No </th>
            <th scope="col">İşlemler </th>
          </tr>
        </thead>
        <tbody>
          {findeNumber.map((number, index) => (
            <tr key={number.id}>
              <th scope="row">{index + 1} </th>
              <td>{number.name} </td>
              <td>{number.lastname} </td>
              <td>{number.tel} </td>

              <td>
                <img src={deleteIcon} onClick={() => deleteNumber(number.id)} />
                <img src={les} onClick={() => setCall(true)} />
              </td>

              {call === true && (
                <td>
                  <img src={mesa} onClick={() => naviget("/add-mesager")} />
                  <img src={phone} onClick={() => setCall(false)} />
                  <img src={video} />
                  <img
                    src={editIcon}
                    onClick={() => naviget(`/edit-number/${number.id}`)}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListNumber;
