import React from "react";
import "./App.css";
import Cards from "./componentes/Cards";
import NavBar from "./componentes/NavBar";
import About from "./componentes/About";

import { Route } from "react-router-dom";
//import { Switch } from "react-router-dom";
import CardDetails from "./componentes/CardDetails";

//import data, { Cairns } from "./data";

//console.log(data);
//console.log(Cairns);

function App() {
  const [ciudades, setCiudades] = React.useState([]);

  function onSearch(ciudad) {
    //Acordarse del .env para guardar la apiKey
    let apiKey = "625fee270c55be543cd3020e1c343dd6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== "404") {
          let incluida = ciudades.some((ciudad) => ciudad.name === data.name);
          if (incluida === false) {
            setCiudades((prevciudades) => [...prevciudades, data]);
          } else {
            alert("La ciudad ya está incluida");
          }
        } else {
          alert("La ciudad no existe en la BD");
        }
      });
  }

  function onClose(id) {
    setCiudades(ciudades.filter((ciudad) => ciudad.id !== id));
  }
  /*
  function onFind(ciudadId) {
    let ciudad = ciudades.find((c) => c.id === parseInt(ciudadId));
    console.log(ciudad);
    if (ciudad) {
      return ciudad;
    }
    return alert("La ciudad no existe en la BD");
  }*/

  function onFilter(ciudadId) {
    let ciudad = ciudades.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div>
      <NavBar onSearch={onSearch} />

      <Route exact path={"/about"}>
        <About />
      </Route>
      <Route exact path="/">
        <div>
          <Cards ciudades={ciudades} onClose={onClose} />
        </div>
      </Route>
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <CardDetails city={onFilter(match.params.ciudadId)} />
        )}
      />
    </div>
  );
}

export default App;
