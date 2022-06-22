// App.js
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { tasksApi } from "../api";

const Booking_create = () => {

   let [guest, setGuest] = useState([])
   let fetchApps = async () => {
     const res = await tasksApi.getApp();
     setGuest(res.data);
   };
   useEffect(() => {
    fetchApps();
   }, []);

   let [table_number, setTable] = useState([])
   let fetchTables = async () => {
    const res = await tasksApi.getTable();
    setTable(res.data);
  };
  useEffect(() => {
    fetchTables();
  }, []);


  let createBooking = async (e) => {
    e.preventDefault();
    let responce;
    try {
      responce = await tasksApi.createBooking({ guest, table_number });
    } catch (error) {
      toast.error("Бронь не добавлена", {
        position: "top-center",
      });
      return;
    }
    toast.success("Бронь добавлена", {
      position: "top-center",
    });
  }
  
    


  return (
    <div>
      <form onSubmit={createBooking}>
      <div>
        <div>Гость из очереди</div>
        <div>
          <Select
            options={guest}
            getOptionLabel={(e) => e.name + " " + e.guest_number+" гостей"}
            onChange = {property => {
              setGuest(property)
            }}
          />
        </div>
        <div>Номер стола</div>
        <Select
            options={table_number}
            getOptionLabel={(e) => e.number + " стол"+ " " + e.seats +" места"}
            onChange = {property => {
              setTable(property)
            }}
          />
        <div>
        <button type="sumbit" className="button">
            Отправить
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Booking_create;
