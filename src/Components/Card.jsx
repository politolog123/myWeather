import React from "react";
import classes from "./Card.module.css";
import Input from "./Input/Input";

const Card = (props) => {
  const ms = props.day.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString("ru", { weekday: "long" });
  const nameWeek = new Date(ms).toLocaleString("ru", 2022, 9, 6);
  console.log(nameWeek);
  const one = props.day.weather[0].description;
  console.log(one);
  const clouds = props.day.weather[0].main;

  const humidity = props.day.main.humidity;
  const wind = props.day.wind.speed;
  const temp = props.day.main.temp;

  const imgURL = "owf owf-" + props.day.weather[0].id + " owf-5x icon-style";
  console.log("kek", imgURL);

  // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.location}>
            <h2 className={classes.bold}>{weekdayName}</h2>
          </div>
          <div className={classes.temp}>
            <h1 className={classes.bold}>
              {Math.round(props.day.main.temp)} °C
            </h1>
          </div>
          <div className={classes.description}>
            <p className={classes.bold}>{props.day.weather[0].description}</p>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.feels}>
            <p className={classes.bold}>{Math.ceil(temp)}</p>
            <p className={classes.bold}>Ветер</p>
          </div>
          <div className={classes.humidity}>
            <p className={classes.bold}>{Math.ceil(humidity)}</p>
            <p className={classes.bold}>Влажность</p>
          </div>
          <div className={classes.wind}>
            {props.day.wind ? <p>{Math.ceil(props.day.wind.speed)}</p> : null}
            <p className={classes.bold}>Осадки</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
