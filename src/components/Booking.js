import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { tasksApi } from "../api";

const BookingList = () => {
  let [Bookings, setBooking] = useState([]);

  useEffect(() => {
    getBooking();
  }, []);

  let getBooking = async () => {
    let responce = await tasksApi.getBooking();
    console.log("DATA:", responce.data);
    setBooking(responce.data);
  };

  let deleteBooking = async(id) =>{
    await tasksApi.deleteBooking(id)
    toast.success('Бронь успешно удалена!', {
      position: "top-center"});
      getBooking()
  
    }

  return (
    <div>
      <p className="application count">Брони
      <Link to="/booking_add">
          <AiOutlinePlusCircle size={24} />
        </Link></p>
      <div className="queue">
        {Bookings.map((data, index) => (
          <div key={data.id} className="main application">
          {data.guest}: {data.guest_number} гостей, <br /> 
          {new Date(data.beginning_time).toLocaleString()}, <br /> Тел.номер:{" "}
          {data.guest_phone_number}<br /> 
          Стол: {data.table}
          <BsTrash size={28} onClick={(e)=>{e.preventDefault();deleteBooking(data.id)}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
