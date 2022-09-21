import React from "react";
import classes from "./Display.module.css";
import Card from "../Card";
import Input from "../Input/Input";

const Display = (props) => {
  const formatCards = () => {
    return props.status.days.map((day, index) => (
      <Card day={day} key={index} />
    ));
  };
  console.log(props);

  return (
    <div className={classes.wrap}>
      {/* <Input seting={props.setData} /> */}
      <h1 className={classes.text}>Прогноз погоды на 5 дней</h1>
      <div className={classes.cardWrapper}>{formatCards()}</div>
    </div>
  );
};

export default Display;
