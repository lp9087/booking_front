/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { tasksApi } from '../api'


const TablesCreate = () => {


  let [number, setNumber] = useState("");
  let [seats, setSeats] = useState("");

 
  let createTable = async (e) => {e.preventDefault()
    let responce
    try {
      responce = await tasksApi.createTable({number, seats})
    } catch (error) {
      toast.error('Ошибка - стол не создан', {
        position: "top-center"
      })
      return
    }
    
      console.log('DATA:', responce.data)
      toast.success('Стол добавлен!', {
        position: "top-center"});
      
      setNumber("")
      setSeats("")
  }

return <div>
  <div className='notes-header'>
    <form onSubmit={createTable}>
      <h1 className='notes-header'>Добавить новый стол</h1>
      <p>Номер стола</p>
      <p><input name="number" value={number} onChange={prop=>setNumber(prop.currentTarget.value)}/></p>
      <p>Количество мест</p>
      <p><input name="seats" value={seats} onChange={prop=>setSeats(prop.currentTarget.value)}/></p>
      <p><button type="sumbit">Отправить</button></p>
    </form>
  </div>
    
</div>;
};
//<TablesCreate onCreate={data=>setTable(prev=>[...prev,data]) }/>
export default TablesCreate;