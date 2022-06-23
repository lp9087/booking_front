import { useEffect, useState } from "react";
import { tasksApi } from "../api";

export default function useRefresh() {
    
    let [Bookings, setBooking] = useState([]);

    useEffect(() => {
        getBooking();
      }, []);

    let getBooking = async () => {
      let responce = await tasksApi.app_with_book();
      setBooking(responce.data);
    };
    
    let [tables, setTable] = useState([]);

    useEffect(() => {
        getTable();
      }, []);
    
    let getTable = async () => {
      let responce = await tasksApi.getTable();
      setTable(responce.data);
    };

    return [Bookings, tables]
    
}