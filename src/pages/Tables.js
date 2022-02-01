/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from 'react';
import { tasksApi } from '../api';
import TablesCreate from './Table_create';
import { Link } from 'react-router-dom';


const TablesList = () => {

    let [tables,setTable] = useState([])

    useEffect(()=>{
      getTable()
    },[])

    let getTable = async () => {
        let responce = await tasksApi.getTable()
        console.log('DATA:', responce.data)
        setTable(responce.data)
    }
  return <div>
    <div className="tables-list">
      {tables.map((data, index) => (
        <Link to={`/table/${data.id}`}>
          <h3 key={data.id}>Стол {data.number}: {data.seats} места</h3>
        </Link>
      ))}
    </div>
    
  <TablesCreate onCreate={data=>setTable(prev=>[...prev,data]) }/>
  </div>;
};

export default TablesList;
