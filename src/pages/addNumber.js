import React, { useState } from "react";
import Header from "../components/Header";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import api from "../api/api";
import urls from "../api/urls";
import actionTypes from "../redux/actions/actionTypes";

import Foters from "../components/Foters";



const AddNumber = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoriesState } = useSelector((state) => state);
  const [form, setForm] = useState({
    id: String(new Date().getTime()),
    name: "",
    lastname: "",
    tel: "",
    categoryId: "",
  });



  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      form.name === "" ||
      form.lastname === "" ||
      form.categoryId === "" ||
      form.tel === ""
    ) {
      alert("Kişi Bilgileri doldurun boş alan olamaz");
      return;
    }
    if (form.tel.length < 11) {
      alert("Numarayı Lütfen Kontöl ediniz");
    }
    api
      .post(urls.number, form)
      .then((res) => {
        dispatch({ type: actionTypes.numberActions.ADD_NUMBER, payload: form });
        navigate("/");
      })
      .catch((err) => {});
  };

  return (
    <div>
      <Header  />
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="isim"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Soyad
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="soyad"
              value={form.lastname}
              onChange={(event) =>
                setForm({ ...form, lastname: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Telefon numarası
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              placeholder="0555"
              value={form.tel}
              onChange={(event) =>
                setForm({ ...form, tel: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
          <select
            className="form-select"
            defaultValue={categoriesState.categories[0].id}
            onChange={(event) =>
              setForm({ ...form, categoryId: event.target.value })
            }>
            {categoriesState.categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          </div>


          <div className="d-flex justify-content-center my-5">
            <button className="btn btn-primary w-50" type="submit">
              Kaydet
            </button>
          </div>
        </form>
      </div>

     <Foters/>
    </div>
  );
};

export default AddNumber;
