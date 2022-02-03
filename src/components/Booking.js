import React, { useState, useEffect } from "react";
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

  return (
    <div>
      <p className="application count">Брони</p>
      <div className="queue">
        {Bookings.map((data, index) => (
          <div key={data.id} className="main application">
          {data.guest}: {data.guest_number} гостей, <br /> 
          {new Date(data.beginning_time).toLocaleString()}, <br /> Тел.номер:{" "}
          {data.guest_phone_number}<br /> 
          Стол: {data.table}

            

          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
