import React, { useState, useEffect } from "react";

export default function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState(false);

  // Temperory function to convert Kelvin temp to Celsius
  function kelvinToCelsius(temp) {
    const newTemp = temp - 273.15;
    return Math.round((newTemp + Number.EPSILON) * 100) / 100;
  }

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      try {
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            // console.log(result);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [lat, long]);

  console.log(data);

  return (
    <>
      {data ? (
        <div>
          Latitude: {lat} <br /> Longitude: {long} <br /> Place: {data.name}
          <br /> Temp: {kelvinToCelsius(data.main.temp)} °C
        </div>
      ) : null}
    </>
  );
}
