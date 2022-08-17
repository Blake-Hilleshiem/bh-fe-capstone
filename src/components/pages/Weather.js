import { useEffect, useState } from "react";

import Loading from "../core/Loading";

function Weather() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [region, setRegion] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [tempAt600, setTempAt600] = useState("");
  const [tempAt900, setTempAt900] = useState("");
  const [tempAt1200, setTempAt1200] = useState("");
  const [tempAt1500, setTempAt1500] = useState("");
  const [tempAt1800, setTempAt1800] = useState("");
  const [tempAt2100, setTempAt2100] = useState("");
  const [conditionAt600, setConditionAt600] = useState("");
  const [conditionAt900, setConditionAt900] = useState("");
  const [conditionAt1200, setConditionAt1200] = useState("");
  const [conditionAt1500, setConditionAt1500] = useState("");
  const [conditionAt1800, setConditionAt1800] = useState("");
  const [conditionAt2100, setConditionAt2100] = useState("");

  const lstTimes = [
    "6:00 am",
    "9:00 am",
    "12:00 pm",
    "3:00 pm",
    "6:00 pm",
    "9:00 pm",
  ];

  const lstSetTemps = [
    setTempAt600,
    setTempAt900,
    setTempAt1200,
    setTempAt1500,
    setTempAt1800,
    setTempAt2100,
  ];

  const lstSetConditions = [
    setConditionAt600,
    setConditionAt900,
    setConditionAt1200,
    setConditionAt1500,
    setConditionAt1800,
    setConditionAt2100,
  ];

  const lstTimeStates = [
    tempAt600,
    tempAt900,
    tempAt1200,
    tempAt1500,
    tempAt1800,
    tempAt2100,
  ];

  const lstConditionsStates = [
    conditionAt600,
    conditionAt900,
    conditionAt1200,
    conditionAt1500,
    conditionAt1800,
    conditionAt2100,
  ];

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      setLat(crd.latitude);
      setLong(crd.longitude);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ff6704fc14msh1e563c1171e28e9p1d202ejsnd6e6b818ea6c",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C%20${long}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCurrentLocation(response.location.name);
        setRegion(response.location.region);
        setCurrentTemp(response.current.temp_f);
      })
      .catch((err) => console.error(err));
  }, [lat, long]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ff6704fc14msh1e563c1171e28e9p1d202ejsnd6e6b818ea6c",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat}%2C%20${long}&days=3`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let time = 6;
        for (let i of lstSetTemps) {
          i(response.forecast.forecastday[0].hour[time].temp_f);
          time += 3;
        }

        time = 6;
        for (let i of lstSetConditions) {
          i(response.forecast.forecastday[0].hour[time].condition.text);
          time += 3;
        }
      })
      .catch((err) => console.error(err));
  }, [region]);

  function RenderTimes() {
    return lstTimes.map((time, index) => {
      return (
        <div className="time-slot-wrapper" key={index}>
          <span style={{ fontWeight: "bold" }}>{time}</span>
          <span>{`${lstTimeStates[index]}°F`}</span>
          <span>{`${lstConditionsStates[index]}`}</span>
        </div>
      );
    });
  }

  return (
    <div>
      {!tempAt600 ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="widget-page-content-container">
          <h1>
            Weather near {currentLocation}, {region}
          </h1>

          <div className="current-temp">{`${currentTemp}°F`}</div>

          <div className="forecast-wrapper">{RenderTimes()}</div>
        </div>
      )}
    </div>
  );
}

export default Weather;
