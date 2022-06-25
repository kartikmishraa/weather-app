import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";

export default function Weather(props) {
  console.log(props.weatherData);

  function formatTemp(num) {
    num = num - 273.15;
    return num.toFixed(2);
  }

  const data = {
    place: props.weatherData.name,
    country: props.weatherData.sys.country,
    maxTemp: formatTemp(props.weatherData.main.temp_max),
    minTemp: formatTemp(props.weatherData.main.temp_min),
    feelsLike: formatTemp(props.weatherData.main.feels_like),
  };

  return (
    <Card className="text-center">
      <Card.Header>{data.place}</Card.Header>
      <Card.Body>
        <Card.Title>
          {moment().format("dddd")}, {moment().format("LL")}
        </Card.Title>
        <Card.Text>
          Max. Temp: {data.maxTemp} &deg;C <br /> Min. Temp: {data.minTemp}{" "}
          &deg;C <br />
          Feels Like: {data.feelsLike} &deg;C
        </Card.Text>
        <Button variant="primary">BUTTON</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{data.country}</Card.Footer>
    </Card>
  );
}
