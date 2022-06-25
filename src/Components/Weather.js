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

  const place = props.weatherData.name;
  const country = props.weatherData.sys.country;
  const maxTemp = formatTemp(props.weatherData.main.temp_max);
  const minTemp = formatTemp(props.weatherData.main.temp_min);
  const feelsLike = formatTemp(props.weatherData.main.feels_like);

  return (
    // <>
    //   {/* <div>Weather</div> */}
    //   <div className="card text-only">
    //     <div className="card-title">
    //       <div>
    //         <h3>{place}</h3>
    //         <h5 className="card-description">{country}</h5>
    //       </div>
    //     </div>
    //     <div className="card-info">
    //       <p>
    //         <i>{moment().format("dddd")}</i>
    //         <br />
    //         <i>{moment().format("LL")}</i>
    //         <br />
    //         <br />
    //         Max. Temp: {maxTemp} &deg;C
    //         <br />
    //         Min. Temp: {minTemp} &deg;C
    //         <br />
    //         Feels Like: {feelsLike} &deg;C
    //       </p>
    //     </div>
    //   </div>
    // </>
    <Card className="text-center">
      <Card.Header>{place}</Card.Header>
      <Card.Body>
        <Card.Title>
          {moment().format("dddd")}, {moment().format("LL")}
        </Card.Title>
        <Card.Text>
          Max. Temp: {maxTemp} &deg;C <br /> Min. Temp: {minTemp} &deg;C <br />
          Feels Like: {feelsLike} &deg;C
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{country}</Card.Footer>
    </Card>
  );
}
