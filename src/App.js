import React, { useState, useEffect } from "react";
import Weather from "./Components/Weather";

export default function App() {
  const [data, setData] = useState(false);
  const [coords, setCoords] = useState({ lat: 0, long: 0 });

  useEffect(() => {
    // Function to get client's geolocation and then fetch data using OpenWeatherAPI
    const fetchData = async () => {
      try {
        await navigator.geolocation.getCurrentPosition(function (position) {
          setCoords({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        });
        await fetch(
          `${process.env.REACT_APP_API_URL}?lat=${coords.lat}&lon=${coords.long}&appid=${process.env.REACT_APP_API_KEY}`
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
  }, [coords.lat, coords.long]);

  return (
    <div className="myContainer">
      {data ? <Weather weatherData={data} /> : null}
    </div>
  );
}
