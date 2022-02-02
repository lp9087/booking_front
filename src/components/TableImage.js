import React, { useEffect, useState } from 'react';
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
      {tablesIm.map((data, index) => (
            <div>
              <h3>
                Стол {data.number}: {data.seats} места
              </h3>
            </div>
      ))}
    </div>
  )}



export default TablesImage;