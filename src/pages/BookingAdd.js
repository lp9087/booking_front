// App.js
import React, { useState, useEffect } from "react";
import Select from "react-select";
import useSWR from "swr";
import Tasks from "../api/Tasks";

function App() {
   const [items, setItems] = useState([])
   const fetchData = async () => {
     const res = await Tasks.get("/");
     setItems(res.data);
   };
   useEffect(() => {
     fetchData();
   }, []);

  //const {data} = useSWR( Tasks.get("/"), fetchData)

  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  console.log(items);
  return (
    <div>
      <div>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</div>
      <div>
        <div></div>
        <div>
          <Select
            // cacheOptions
            // defaultOptions
            options={items}
            value={selectedValue}
            getOptionLabel={(e) => e.name + " " + e.guest_number}
            getOptionValue={(e) => e.id}
            onInputChange={handleInputChange}
            onChange={handleChange}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
