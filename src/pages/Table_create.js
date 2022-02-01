/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import { tasksApi } from '../api';

const TablesCreate = ({onCreate}) => {


  let [number, setNumber] = useState("");
  let [seats, setSeats] = useState("");

 
  let createTable = async (e) => {e.preventDefault()
      let responce = await tasksApi.createTable({number, seats})
      console.log('DATA:', responce.data)
      onCreate?.(responce.data)
      setNumber("")
      setSeats("")
  }

return <div>
  <div className="table_create">
    <form onSubmit={createTable}>
      <h1>Добавить новый стол</h1>
      <p>Номер стола</p>
      <p><input name="number" value={number} onChange={prop=>setNumber(prop.currentTarget.value)}/></p>
      <p>Количество мест</p>
      <p><input name="seats" value={seats} onChange={prop=>setSeats(prop.currentTarget.value)}/></p>
      <p><button type="sumbit">Отправить</button></p>
    </form>
  </div>
    
</div>;
};

export default TablesCreate;