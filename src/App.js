import React, { useState, useEffect } from "react";
import Weather from "./Components/Weather";

export default function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState(false);

  useEffect(() => {
    // Function to get client's geolocation and then fetch data using OpenWeatherAPI
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
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [lat, long]);

  console.log(data); // logging received data

  return (
    <div className="App">{data ? <Weather weatherData={""} /> : null}</div>
  );
}
