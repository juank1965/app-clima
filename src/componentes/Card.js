import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props) {
  let img = props.ciudad.weather[0].icon;
  let desc = props.ciudad.weather[0].description;
  let urlimg = `http://openweathermap.org/img/wn/${img}@2x.png`;
  return (
    <div className={styles.contenedor}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <button
            className={styles.boton}
            onClick={() => props.onClose(props.ciudad.id)}
          >
            X
          </button>
          <h3 className={styles.info}>{props.ciudad.name}</h3>
        </div>
        <div>
          <Link to={`/ciudad/${props.ciudad.id}`}>
            <p>
              <i>Mostrar información detallada</i>
            </p>
          </Link>
          <p className={styles.info}>
            Temp. Max: {props.ciudad.main.temp_max}&#176;
          </p>
          <p className={styles.info}>
            Temp. Min.: {props.ciudad.main.temp_min}&#176;
          </p>
          <p className={styles.info}>{desc}</p>
          <div className={styles.imagen}>
            <img className={styles.info} src={urlimg} alt={desc} />
          </div>
        </div>
      </div>
    </div>
  );
}
