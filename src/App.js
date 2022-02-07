import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import TablesList from "./pages/Tables";
import SingleTable from "./pages/SingleTable";
import TablesCreate from "./pages/TableCreate";
import { ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "react-router-dom";
import Main from "./components/Main";
import ApplicationCreate from "./pages/ApplicationAdd";
import BookingAdd from "./pages/BookingAdd";



function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/table" exact element={<TablesList/>} />
            <Route path="/table/create" exact element={<TablesCreate/>} />
            <Route path="/table/:id" exact element={<SingleTable/>} />
            <Route path="/application" exact element={<ApplicationCreate/>} />
            <Route path="/booking_add" exact element={<BookingAdd/>} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </Router>
  );
}

export default App;
