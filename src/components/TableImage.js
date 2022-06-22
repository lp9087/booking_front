import React, { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { tasksApi } from '../api';


const TablesImage = () => {
  let [tablesIm, setTableIm] = useState([]);

  useEffect(() => {
    getTableIm();
  }, []);

  let getTableIm = async () => {
    let responce = await tasksApi.getTable();
    console.log("DATA:", responce.data);
    setTableIm(responce.data);
  };


  return (
    <div className='tables'>
      {}
      {tablesIm.map((data, index) => (
        <div className={data.status !== false ? 'tables-raw-green':'tables-raw-red' } key={index}>
          <h1>
            Стол {data.number}: {data.seats} места
          </h1>
        </div>
      ))}
      <Link to="/table/create">
          <AiOutlinePlusCircle size={28} />
        </Link>
    </div>
  )}


export default TablesImage;
