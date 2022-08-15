/*
To Do's:
  Figure out Films issue or remove
  Fix Loding on details from switching subject and Item
  Add Loader Spinner to areas
  Style up to look nice
*/

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
      // console.log("other condition");
      console.log("the list: ", listOfNamesObjects);
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

    // switch (subject) {
    //   case "people":
    //     return listOfPeopleObj.map((item) => {
    //       return <option key={item.uid}>{item.name}</option>;
    //     });
    //   case "films":
    //     return listOfFilmsObj.map((item) => {
    //       return <option key={item.uid}>{item.name}</option>;
    //     });
    //   case "starships":
    //     return listOfStarshipsObj.map((item) => {
    //       return <option key={item.uid}>{item.name}</option>;
    //     });
    //   case "vehicles":
    //     return listOfVehiclesObj.map((item) => {
    //       return <option key={item.uid}>{item.name}</option>;
    //     });
    //   case "species":
    //     return listOfSpeciesObj.map((item) => {
    //       return <option key={item.uid}>{item.name}</option>;
    //     });
    //   case "planets":
    //     return listOfPlanetsObj.map((item) => {
    //       return <option key={item.uid}>{item.name}</option>;
    //     });
    // }
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

  function RenderInfo(lstOfSubjects) {
    return lstOfSubjects.map((item, index) => {
      return (
        <div className="result-row" key={index}>
          <div className="subject-item">{`${item} :`}</div>
          <div>
            {searchItemDetails[`${item}`]
              ? searchItemDetails[`${item}`]
              : "...loading"}
          </div>
        </div>
      );
    });
  }

  useEffect(() => {
    fetch("https://www.swapi.tech/count/all")
      .then((res) => res.json())
      .then((data) => {
        setCounts(data.counts);
        console.log(data.counts);
      })
      .catch((err) => console.log("count fetch error: ", err));
  }, []);

  useEffect(() => {
    if (searchBy) {
      if (searchBy === "films") {
        fetch("https://www.swapi.tech/api/films")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setListOfNamesObjects(data.result);
          })
          .catch((err) => console.log("fetch error: ", err));
      } else {
        setIsLoading(true);
        console.log(counts[`${searchBy}`]);
        fetch(
          `https://www.swapi.tech/api/${searchBy}?page=1&limit=${
            counts[`${searchBy}`]
          }`
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.results);
            // setListOfPeopleObj(data.results);
            setListOfNamesObjects(data.results);
            console.log(data.results);
            setIsLoading(false);
          })
          .catch((err) => console.log("fetch error: ", err));
      }
    }
  }, [searchBy]);

  useEffect(() => {
    setDetailsIsLoading(true);
    if (searchItemFetchRoute) {
      fetch(`${searchItemFetchRoute}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSearchItemDetails(data.result.properties);
        })
        .catch((err) => console.error("item fetch error: ", err));
    }
    setDetailsIsLoading(false);
  }, [searchItemFetchRoute]);

  // function RenderFromCategory() {
  //   // useEffect(()=>{

  //   // },[])

  //   return <div></div>;
  // }

  return (
    <div className="widget-page-content-container">
      <h1>Welcome to SWAPI Search</h1>
      <h3>Select a subject to search the Star Wars API</h3>

      <select
        onChange={(e) => {
          setSearchBy(e.target.value);
          setSearchItemFetchRoute("");

          // console.log(e.target.value);
        }}
      >
        <option value="">- Select Search By Subject -</option>
        <option value="people">People</option>
        <option value="films">Films</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="species">Species</option>
        <option value="planets">Planets</option>
      </select>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        searchBy && (
          <select
            onChange={(e) => {
              setSearchItemFetchRoute(e.target.value);
            }}
          >
            {/* {" "} */}
            <option value=""> - Select a result - </option>
            {renderSubjects()}
          </select>
        )
      )}
      {detailsIsLoading ? (
        <div>...loading</div>
      ) : (
        searchItemFetchRoute && (
          <div className="swapi-results-wrapper">
            {RenderInfo(subjectsDictionary[`${searchBy}`])}
          </div>
        )
      )}

      {/* {console.log(searchBy, listOfPlanetsObj)} */}
      {/* <button>Submit</button> */}
      {/* </form> */}
    </div>
  );
}

export default SearchSwapi;

// ----

// Tryn stuff out:

// fetch(`https://www.swapi.tech/api/films?page=1&limit=100`)
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data.results);
//     setListOfFilmsObj(data.results);
//   })
//   .catch((err) => console.log("fetch error: ", err));

// fetch(`https://www.swapi.tech/api/starships?page=1&limit=100`)
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data.results);
//     setListOfStarshipsObj(data.results);
//   })
//   .catch((err) => console.log("fetch error: ", err));

// fetch(`https://www.swapi.tech/api/vehicles?page=1&limit=100`)
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data.results);
//     setListOfVehiclesObj(data.results);
//   })
//   .catch((err) => console.log("fetch error: ", err));

// fetch(`https://www.swapi.tech/api/species?page=1&limit=100`)
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data.results);
//     setListOfSpeciesObj(data.results);
//   })
//   .catch((err) => console.log("fetch error: ", err));

// fetch(`https://www.swapi.tech/api/planets?page=1&limit=100`)
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data.results);
//     setListOfPlanetsObj(data.results);
//   })
//   .catch((err) => console.log("fetch error: ", err));
