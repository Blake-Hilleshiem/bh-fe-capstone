import { useEffect, useState } from "react";

function SearchSwapi() {
  const [counts, setCounts] = useState({});
  const [searchBy, setSearchBy] = useState("");
  const [listOfNamesObjects, setListOfNamesObjects] = useState([]);
  const [searchItemFetchRoute, setSearchItemFetchRoute] = useState("");
  const [searchItemDetails, setSearchItemDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [detailsIsLoading, setDetailsIsLoading] = useState(false);

  function renderSubjects() {
    if (searchBy === "films") {
      return listOfNamesObjects.map((item) => {
        return <option key={item.uid}>{item.properties.title}</option>;
      });
    } else {
      return listOfNamesObjects.map((item) => {
        return (
          <option key={item.uid} value={item.url}>
            {item.name}
          </option>
        );
      });
    }
  }

  const lstStarShipsSubjects = [
    "name",
    "model",
    "starship_class",
    "manufacturer",
    "length",
    "crew",
    "passengers",
  ];

  const lstPeopleSubjects = [
    "name",
    "birth_year",
    "height",
    "mass",
    "skin_color",
    "gender",
  ];

  const lstVehiclesSubjects = [
    "name",
    "model",
    "vehicle_class",
    "manufacturer",
    "length",
    "cargo_capacity",
    "crew",
    "passengers",
    "cost_in_credits",
  ];

  const lstPlanetsSubjects = [
    "name",
    "diameter",
    "population",
    "terrain",
    "climate",
    "rotation_period",
    "orbital_period",
  ];

  const lstSpeciesSubjects = [
    "name",
    "classification",
    "designation",
    "average_lifespan",
    "average_height",
    "skin_colors",
    "language",
  ];

  const subjectsDictionary = {
    people: lstPeopleSubjects,
    starships: lstStarShipsSubjects,
    vehicles: lstVehiclesSubjects,
    species: lstSpeciesSubjects,
    planets: lstPlanetsSubjects,
  };

  useEffect(() => {
    fetch("https://www.swapi.tech/count/all")
      .then((res) => res.json())
      .then((data) => {
        setCounts(data.counts);
      })
      .catch((err) => console.error("count fetch error: ", err));
  }, []);

  useEffect(() => {
    if (searchBy) {
      if (searchBy === "films") {
        fetch("https://www.swapi.tech/api/films")
          .then((res) => res.json())
          .then((data) => {
            setListOfNamesObjects(data.result);
          })
          .catch((err) => console.error("fetch error: ", err));
      } else {
        setIsLoading(true);
        fetch(
          `https://www.swapi.tech/api/${searchBy}?page=1&limit=${
            counts[`${searchBy}`]
          }`
        )
          .then((res) => res.json())
          .then((data) => {
            setListOfNamesObjects(data.results);
            setIsLoading(false);
          })
          .catch((err) => console.error("fetch error: ", err));
      }
    }
  }, [searchBy]);

  useEffect(() => {
    setDetailsIsLoading(true);
    if (searchItemFetchRoute) {
      fetch(`${searchItemFetchRoute}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchItemDetails(data.result.properties);
        })
        .catch((err) => console.error("item fetch error: ", err));
    }
    setDetailsIsLoading(false);
  }, [searchItemFetchRoute]);

  function RenderInfo(lstOfSubjects) {
    return lstOfSubjects.map((item, index) => {
      return (
        <div className="result-row" key={index}>
          <div className="subject-item">{`${item} :`}</div>
          <div>
            {searchItemDetails[`${item}`]
              ? searchItemDetails[`${item}`]
              : "loading..."}
          </div>
        </div>
      );
    });
  }

  return (
    <div className="widget-page-content-container">
      <h1>Welcome to SWAPI Search</h1>
      <h3>Select a subject to search the Star Wars API</h3>

      <select
        className="swapi-select"
        onChange={(e) => {
          setSearchBy(e.target.value);
          setSearchItemFetchRoute("");
        }}
      >
        <option value=""> - Select Search By Subject - </option>
        <option value="people">People</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="species">Species</option>
        <option value="planets">Planets</option>
      </select>
      {isLoading ? (
        <div style={{ marginTop: "20px" }}>loading...</div>
      ) : (
        searchBy && (
          <select
            className="swapi-select"
            onChange={(e) => {
              setSearchItemFetchRoute(e.target.value);
            }}
          >
            <option value=""> - Select a result - </option>
            {renderSubjects()}
          </select>
        )
      )}
      {detailsIsLoading ? (
        <div>loading...</div>
      ) : (
        searchItemFetchRoute && (
          <div className="swapi-results-container">
            <div className="swapi-spacer"></div>
            <div className="swapi-results-wrapper">
              {RenderInfo(subjectsDictionary[`${searchBy}`])}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default SearchSwapi;
