import React from "react";
import styles from "./NavBar.module.css";
import icono from "../utilidades/iconoClima.png";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  const [ciudad, setCiudad] = React.useState("");

  let handlerSubmit = (e) => {
    e.preventDefault();
    props.onSearch(ciudad);
    setCiudad("");
  };

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.active}
          >
            <img src={icono} width="40px" height="40px" alt="logo Clima" />
            <h3>
              <i>APP del Clima</i>
            </h3>
          </NavLink>
          <NavLink
            to="/about"
            className={styles.link}
            activeClassName={styles.active}
          >
            <h3> Acerca de </h3>
          </NavLink>
        </div>
        <form>
          <input
            name="ciudad"
            type="search"
            placeholder="Busque una ciudad ..."
            aria-label="Search"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
          <button onClick={handlerSubmit} type="submit">
            Buscar
          </button>
        </form>
      </nav>
    </div>
  );
}
