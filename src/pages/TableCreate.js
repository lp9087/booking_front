/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { tasksApi } from "../api";

const TablesCreate = () => {
  let navigate = useNavigate();
  let [number, setNumber] = useState("");
  let [seats, setSeats] = useState("");

  let createTable = async (e) => {
    e.preventDefault();
    let responce;
    try {
      responce = await tasksApi.createTable({ number, seats });
    } catch (error) {
      toast.error("Ошибка - стол не создан", {
        position: "top-center",
      });
      return;
    }

    console.log("DATA:", responce.data);
    toast.success("Стол добавлен!", {
      position: "top-center",
    });

    setNumber("");
    setSeats("");
    navigate("/table");
  };

  return (
    <div className="createTable">
      <Link to="/table/" className="back">
        <AiOutlineRollback size={28} />
      </Link>
      <form onSubmit={createTable}>
        <h1 className="notes-header">Добавить новый стол</h1>
        <p>Номер стола</p>
        <p>
          <input
            name="number"
            value={number}
            onChange={(prop) => setNumber(prop.currentTarget.value)}
            className="input"
          />
        </p>
        <p>Количество мест</p>
        <p>
          <input
            name="seats"
            value={seats}
            onChange={(prop) => setSeats(prop.currentTarget.value)}
            className="input"
          />
        </p>
        <p>
          <button type="sumbit" className="button">
            Отправить
          </button>
        </p>
      </form>
      <div></div>
    </div>
  );
};
//<TablesCreate onCreate={data=>setTable(prev=>[...prev,data]) }/>
export default TablesCreate;
