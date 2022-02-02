import React from 'react';
import '../styles/Main.css'
import AppList from './Aplication';
import BookingList from './Booking';
import TableImage from './TableImage';

const Main = () => {
  return (
  <div className='wrapper'>
      <BookingList />
      <TableImage />
      <AppList />
  </div>
  )};

export default Main;