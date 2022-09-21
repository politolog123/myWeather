import React, { useState } from "react";
import axios from "axios";
import classes from "./Input.module.css";

const Input = (props) => {
  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${}&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`;

  const searchLocation = (event) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${event.target.value}&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`
    )
      .then((res) => res.json())
      .then((response) => {
        const dailyData = response.list.filter((reading) =>
          reading.dt_txt.includes("15:00:00")
        );
        props.seting({ days: dailyData });
        console.log(response.data);
      });

    // props.seting(response.days);
  };
  return (
    <div className={classes.search}>
      <input
        onChange={(e) => searchLocation(e)}
        placeholder="Введите город"
        type="text"
      />
    </div>
  );
};

export default Input;
