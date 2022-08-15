import { useEffect, useState } from "react";

function Weather() {
  const [lat, setLat] = useState("34.052235");
  const [long, setLong] = useState("-118.243683");
  const [currentLocation, setCurrentLocation] = useState("loading...");
  const [currentTemp, setCurrentTemp] = useState("loading...");
  const [tempAt600, setTempAt600] = useState("loading...");
  const [tempAt900, setTempAt900] = useState("loading...");
  const [tempAt1200, setTempAt1200] = useState("loading...");
  const [tempAt1500, setTempAt1500] = useState("loading...");
  const [tempAt1800, setTempAt1800] = useState("loading...");
  const [tempAt2100, setTempAt2100] = useState("loading...");
  const [conditionAt600, setConditionAt600] = useState("loading...");
  const [conditionAt900, setConditionAt900] = useState("loading...");
  const [conditionAt1200, setConditionAt1200] = useState("loading...");
  const [conditionAt1500, setConditionAt1500] = useState("loading...");
  const [conditionAt1800, setConditionAt1800] = useState("loading...");
  const [conditionAt2100, setConditionAt2100] = useState("");

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "ff6704fc14msh1e563c1171e28e9p1d202ejsnd6e6b818ea6c",
  //     "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
  //   },
  // };

  // fetch(
  //   "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=40.1&lon=-111.6",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => {console.log(response), console.log(response.data[])})
  //   .catch((err) => console.error(err));

  // -------------------------

  useEffect(() => {
    const geoParams = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      setLat(crd.latitude);
      setLong(crd.longitude);
      console.log(crd.latitude);
      console.log(crd.longitude);
      console.log("got set:", lat);
      console.log("got set:", long);
      // return [crd.latitude, crd.longitude];
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    let getCoords = navigator.geolocation.getCurrentPosition(
      success,
      error,
      geoParams
    );

    const myPromise = new Promise((resolve) => {
      resolve(getCoords);
    });

    // const myPromise = Promise.resolve(getCoords);

    // myPromise.then(console.log(lat, long));

    let showCoords = async () => {
      const x = await myPromise;
      // console.log("this awaits promise", x);
      // console.log(lat, long);
    };
    showCoords();

    // ===================== use the below VVV

    async function setData() {
      await myPromise;

      const liveWeatherOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ff6704fc14msh1e563c1171e28e9p1d202ejsnd6e6b818ea6c",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      // lat 40.093181
      // long -111.6048261

      fetch(
        // `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat}%20${long}&days=3`,
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=40.115009%2C%20111.654709&days=3`,

        liveWeatherOptions
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log(response.current.temp_f);
          setCurrentTemp(response.current.temp_f);
          // console.log(response.current.temp_f);
        })
        .catch((err) => console.error(err));

      const forecastOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ff6704fc14msh1e563c1171e28e9p1d202ejsnd6e6b818ea6c",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat}%2C%20${long}&days=3`,
        forecastOptions
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log("forcast options: ", response);
          setCurrentLocation(response.location.name);
          setTempAt600(response.forecast.forecastday[0].hour[6].temp_f);
          setTempAt900(response.forecast.forecastday[0].hour[9].temp_f);
          setTempAt1200(response.forecast.forecastday[0].hour[12].temp_f);
          setTempAt1500(response.forecast.forecastday[0].hour[15].temp_f);
          setTempAt1800(response.forecast.forecastday[0].hour[18].temp_f);
          setTempAt2100(response.forecast.forecastday[0].hour[21].temp_f);
          setConditionAt600(
            response.forecast.forecastday[0].hour[6].condition.text
          );
          setConditionAt900(
            response.forecast.forecastday[0].hour[9].condition.text
          );
          setConditionAt1200(
            response.forecast.forecastday[0].hour[12].condition.text
          );
          setConditionAt1500(
            response.forecast.forecastday[0].hour[15].condition.text
          );
          setConditionAt1800(
            response.forecast.forecastday[0].hour[18].condition.text
          );
          setConditionAt2100(
            response.forecast.forecastday[0].hour[6].condition.text
          );

          // navigator.geolocation.getCurrentPosition((position) => {
          //   const { latitude, longitude } = position.coords;
          //   // Show a map centered at latitude / longitude.
          //   console.log(position.coords);
          // });
        })
        .catch((err) => console.error(err));

      // --------
    }
    setData();

    // ==================== use the above ^^^
  }, [lat]);

  return (
    <div className="widget-page-content-container">
      <h1>Weather in {currentLocation}</h1>

      <div className="current-temp">{`${currentTemp}°F`}</div>

      <div className="forecast-wrapper">
        <div className="time-slot-wrapper">
          6:00 am <span>{`${tempAt600}°F`}</span>
          <span>{conditionAt600}</span>
        </div>

        <div className="time-slot-wrapper">
          9:00 am <span>{`${tempAt900}°F`}</span>
          <span>{conditionAt900}</span>
        </div>

        <div className="time-slot-wrapper">
          12:00 pm <span>{`${tempAt1200}°F`}</span>
          <span>{conditionAt1200}</span>
        </div>

        <div className="time-slot-wrapper">
          3:00 pm <span>{`${tempAt1500}°F`}</span>
          <span>{conditionAt1500}</span>
        </div>

        <div className="time-slot-wrapper">
          6:00 pm <span>{`${tempAt1800}°F`}</span>
          <span>{conditionAt1800}</span>
        </div>

        {conditionAt2100 ? (
          <div className="time-slot-wrapper">
            9:00 pm
            <span>{`${tempAt2100}°F`}</span>
            <span>{conditionAt2100}</span>{" "}
          </div>
        ) : (
          "loading..."
        )}
      </div>
      {/* {"" ? "truthy" : "falsy"} */}
    </div>
  );
}

export default Weather;

// ----------------

// tryn stuff:

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ff6704fc14msh1e563c1171e28e9p1d202ejsnd6e6b818ea6c",
//     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//   },
// };

// fetch(
//   `https://weatherapi-com.p.rapidapi.com/forecast.json?q=40.115009%2C%20-111.654709&days=3`,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response.current.temp_f);
//     setCurrentTemp(response.current.temp_f);
//     // console.log(response.current.temp_f);
//   })
//   .catch((err) => console.error(err));

// const forcast = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ff6704fc14msh1e563c1171e28e9p1d202ejsnd6e6b818ea6c",
//     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://weatherapi-com.p.rapidapi.com/forecast.json?q=40.115009%2C%20-111.654709&days=3",
//   forcast
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log("forcast options: ", response);
//     setCurrentLocation(response.location.name);
//     setTempAt600(response.forecast.forecastday[0].hour[6].temp_f);
//     setTempAt900(response.forecast.forecastday[0].hour[9].temp_f);
//     setTempAt1200(response.forecast.forecastday[0].hour[12].temp_f);
//     setTempAt1500(response.forecast.forecastday[0].hour[15].temp_f);
//     setTempAt1800(response.forecast.forecastday[0].hour[18].temp_f);
//     setTempAt2100(response.forecast.forecastday[0].hour[21].temp_f);
//     setConditionAt600(
//       response.forecast.forecastday[0].hour[6].condition.text
//     );
//     setConditionAt900(
//       response.forecast.forecastday[0].hour[9].condition.text
//     );
//     setConditionAt1200(
//       response.forecast.forecastday[0].hour[12].condition.text
//     );
//     setConditionAt1500(
//       response.forecast.forecastday[0].hour[15].condition.text
//     );
//     setConditionAt1800(
//       response.forecast.forecastday[0].hour[18].condition.text
//     );
//     setConditionAt2100(
//       response.forecast.forecastday[0].hour[6].condition.text
//     );

//     // navigator.geolocation.getCurrentPosition((position) => {
//     //   const { latitude, longitude } = position.coords;
//     //   // Show a map centered at latitude / longitude.
//     //   console.log(position.coords);
//     // });
//   })
//   .catch((err) => console.error(err));

// // --------
