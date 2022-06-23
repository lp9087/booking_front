/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { tasksApi } from "../api";
import { Link } from "react-router-dom";
import {AiOutlinePlusCircle} from "react-icons/ai"
import {BsTrash} from "react-icons/bs"
import { toast } from "react-toastify";
import { GiRoundTable } from "react-icons/gi";

const TablesList = () => {
  let [tables, setTable] = useState([]);

  useEffect(() => {
    getTable();
  }, []);

  let getTable = async () => {
    let responce = await tasksApi.getTable();
    setTable(responce.data);
  };

  let deleteTable = async(id) =>{
  await tasksApi.deleteTable(id)
  toast.success('Стол удалён!', {
    position: "top-center"});
  getTable()
  }

  
  return (
    <div className="notes">
      <div className="notes-header">
        <div style = {{display:"flex", gap:15}}>
        <h2 className="notes-title">&#9782; Столы</h2>
        <Link to="/table/create">
          <AiOutlinePlusCircle size={28} />
        </Link>
        <Link to="/" className="back">
        <GiRoundTable size={32} />
      </Link>
        </div>
        <p className="notes-count">{tables.length}</p>
      </div>
      <div className="tables-list">
        {tables.map((data, index) => (
          <Link key={index} to={`/table/${data.id}`}>
            <div className="notes-list-item">
              <h3>
                Стол {data.number}: {data.seats} места
              </h3><BsTrash size={28} onClick={(e)=>{e.preventDefault();deleteTable(data.id)}} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};



  export default TablesList
