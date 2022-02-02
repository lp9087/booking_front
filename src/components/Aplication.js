import React, { useState, useEffect } from "react";
import { tasksApi } from "../api";

const AppList = () => {
  let [Apps, setApps] = useState([]);

  useEffect(() => {
    getApp();
  }, []);

  let getApp = async () => {
    let responce = await tasksApi.getApp();
    console.log("DATA:", responce.data);
    setApps(responce.data);
  };

  return (
    <div>
      <p className="application count">Очередь</p>
      <div className="queue">
        {Apps.filter((data, index) => data.status !== true).map(
          (data, index) => (
            <div key={data.id} className="main application">
              {data.name}: {data.guest_number} гостей, <br />
              {new Date(data.datetime).toLocaleString()}, <br /> Тел.номер:{" "}
              {data.phone_number}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AppList;