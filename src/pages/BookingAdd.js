import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import { tasksApi } from "../api";
import { GiRoundTable } from "react-icons/gi";

const Booking_create = () => {
  let navigate = useNavigate();
  let [guest, setGuest] = useState([])
  let [table_number, setTable] = useState([])

  let fetchApps = async () => {
     const res = await tasksApi.app_without_book();
     setGuest(res.data);
   };
   useEffect(() => {
    fetchApps();
   }, []);

   
  let fetchTables = async () => {
   const res = await tasksApi.freeTables();
   setTable(res.data);
  };
  useEffect(() => {
    fetchTables();
  }, []);


  let createBooking = async (e) => {
    e.preventDefault();
    try {
      await tasksApi.createBooking({ guest, table_number });
    } catch (error) {
      toast.error("Бронь не добавлена", {
        position: "top-center",
      });
      return;
    }
    toast.success("Бронь добавлена", {
      position: "top-center",
    });
    navigate("/");
  }
  
  return (
    <div>
      <Link to="/" className="back">
        <GiRoundTable size={32} />
      </Link>
      <form onSubmit={createBooking}>
      <div className="createBook">
        <div>Гость из очереди</div>
        <div className="select">
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
