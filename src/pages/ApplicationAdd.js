/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { tasksApi } from "../api";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { GiRoundTable} from "react-icons/gi";

const ApplicationCreate = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [guest_number, setGuests] = useState("");
  let [phone_number, setPhone] = useState("");
  let [datetime, setTime] = useState("");
  let [note, setNote] = useState("");

  let createApp = async (e) => {
    e.preventDefault();
    let responce;
    try {
      responce = await tasksApi.createApplication({
        name,
        guest_number,
        phone_number,
        datetime,
        note,
      });
    } catch (error) {
      toast.error("Ошибка - Запись в очередь не добавлена", {
        position: "top-center",
      });
      return;
    }

    console.log("DATA:", responce.data);
    toast.success("Запись добавлена!", {
      position: "top-center",
    });

    setName("");
    setGuests("");
    setPhone("");
    setTime("");
    setNote("");
    navigate("/");
  };

  return (
    <div>
      <Link to="/" className="back">
        <GiRoundTable size={32} />
      </Link>
    <div className="createApp">
      <form onSubmit={createApp}>
        <h1 className="notes-header">Добавить запись в очередь</h1>
        <p>ФИО</p>
        <p>
          <input
            name="name"
            value={name}
            onChange={(prop) => setName(prop.currentTarget.value)}
            className="input"
          />
        </p>
        <p>Количество гостей</p>
        <p>
          <input
            name="guests"
            value={guest_number}
            onChange={(prop) => setGuests(prop.currentTarget.value)}
            className="input"
          />
        </p>
        <p>Номер телефона</p>
        <p>
          <input
            name="phone_num"
            value={phone_number}
            onChange={(prop) => setPhone(prop.currentTarget.value)}
            className="input"
          />
        </p>
        <p>Время желаемого бронирования</p>
        <p>
          <DateTimePickerComponent
            name="time"
            value={datetime}
             onChange={(prop) => setTime(prop.value.toJSON())}
            className="input"
          />
        </p>
        <p>Пожелания</p>
        <p>
          <input
            name="notes"
            value={note}
            onChange={(prop) => setNote(prop.currentTarget.value)}
            className="input"
          />
        </p>
        <p>
          <button type="sumbit" className="button">
            Отправить
          </button>
        </p>
      </form>
    </div>
    
    </div>
    
    
  );
};
//<TablesCreate onCreate={data=>setTable(prev=>[...prev,data]) }/>
export default ApplicationCreate;
