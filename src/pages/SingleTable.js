import React, { useState, useEffect } from "react";
import { tasksApi } from "../api";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleTable = ({}) => {
  let params = useParams()
  let [table, setTable] = useState(null);

  useEffect(() => {
    getDetailTable();
  },[]);

  let getDetailTable = async () => {
    let responce = await tasksApi.getDetailTable(params.id);
    console.log("DATA:", responce.data);
    setTable(responce.data);
  };
  return (
    <div className="note-header">
      <h3>
        <Link to='/table'>
          <ArrowLeft />
        </Link>
      </h3>
      <p>Номер стола: {table?.number}</p>
      <p>Количество мест: {table?.seats}</p>
    </div>
  );
};

export default SingleTable;
