import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styles.fondo}>
      <h3 className={styles.titulo}>
        <i>TARJETAS DEL CLIMA POR CIUDAD</i>
      </h3>
      <hr />
      <div className={styles.container}>
        {props.ciudades ? (
          props.ciudades.map((ciudad) => (
            <Card key={ciudad.id} ciudad={ciudad} onClose={props.onClose} />
          ))
        ) : (
          <h4> No hay ciudades</h4>
        )}
      </div>
    </div>
  );
}
