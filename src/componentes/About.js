import React from "react";
import styles from "./About.module.css";
import frey from "../utilidades/meme.png";

export default function About() {
  return (
    <div>
      <div className={styles.aboutSection}>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2>Quien Soy</h2>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <img src={frey} alt="Frey" width="150px" height="150px" />
            <div className={styles.container}>
              <h2>Juan Carlos Bastida Quintero</h2>
              <p className={styles.title}>
                Ingeniero Industrial, <br /> Fullstack Developer
                <br /> (React Nodejs - Posgres & MySQL - MongoDB)
                <br />
                Firebase -Google Cloud Platform - Heroku <br />
                Ruby On Rails
              </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>juancarlosbastidasq@gmail.com</p>
              <p>
                <button className={styles.button}>Ver mi Portafolio</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
