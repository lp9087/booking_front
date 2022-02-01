import React, { useState, useEffect } from "react";
import { tasksApi } from "../api";

const SingleTable = ({ match }) => {
  let tableID = match.params.id;
  let [table, setTable] = useState(null);

  useEffect(() => {
    getDetailTable();
  }, [tableID]);

  let getDetailTable = async () => {
    let responce = await tasksApi.getDetailTable(tableID);
    console.log("DATA:", responce.data);
    setTable(responce.data);
  };
debugger
  return (
    <div>
      <div className="tables-detail">
        <p>Номер стола:{table?.number}</p>
        <p>Количество мест:{table?.seats}</p>
      </div>
    </div>
  );
};

export default SingleTable;
