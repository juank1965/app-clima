import React from "react";
import styles from "./CardDetails.module.css";

export default function CardDetails({ city }) {
  let img = city.weather[0].icon;
  let desc = city.weather[0].description;
  let urlimg = `http://openweathermap.org/img/wn/${img}@2x.png`;
  return (
    <div className={styles.contenedor}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.titulo}>{city.name}</h2>
          <h3 className={styles.titulo}>
            <i>información detallada</i>
          </h3>
        </div>
        <div>
          <div className={styles.principal}>
            <div className={styles.imagen}>
              <img className={styles.info} src={urlimg} alt={desc} />
              <p className={styles.info}>{desc}</p>
            </div>
            <div>
              <p className={styles.info}>
                Pais: {city.sys.country} <br />
                Latitud: {city.coord.lat}º <br />
                Longitud: {city.coord.lon}º
              </p>
            </div>
            <div>
              <p className={styles.info}>
                Temperatura: {city.main.temp} ºC
                <br /> Temp. Max: {city.main.temp_max}
                &#176; <br />
                Temp. Min.: {city.main.temp_min}&#176;
              </p>
            </div>
          </div>

          <div>
            <h4 className={styles.titulo}>Informacion Climatologica</h4>
            <p className={styles.info}>
              <b>Clima:</b> {city.weather[0].main} <b>Viento:</b>{" "}
              {city.wind.speed} km/h <br />
              <b>Presión:</b> {city.main.pressure} hPa <b>Humedad:</b>{" "}
              {city.main.humidity} % <br />
              <b>Visibilidad:</b> {city.visibility} m
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
