import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display/Display";
import Input from "./Components/Input/Input";
import { useDidMount } from "rooks";

const App = (props) => {
  const [weather, setData] = useState({});
  let weatherURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=Moscow&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";

  useDidMount(() => {
    console.log("kek");
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("15:00:00")
        );
        setData({ days: dailyData });
        console.log(dailyData);
      });
  });
  return (
    <>
      <Input seting={setData} />
      {weather.days?.length > 0 && <Display status={weather} />}
      {/* {console.log(weather)}
      <Display status={weather} /> */}
    </>
  );
};

export default App;
