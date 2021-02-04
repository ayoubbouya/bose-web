import React from "react";
import styles from "./battery.module.css";
import battery from "./images/img.svg";

function Battery() {
  return (
    <div className={styles.container}>
      <section className={styles.section2}>
        <h1 className={styles.heading1}>Up to 20 hours battery life</h1>
        <p className={styles.paragraph}>
          Enjoy up to 20 hours of listening, enough time to pore through this
          entire playlist. So you can keep the music — or the quiet — going all
          day long. And when it finally runs down, a quick 15-minute charge
          gives you another 2.5 hours.
        </p>
      </section>
      <img className={styles.photo} src={battery} alt="group" />
    </div>
  );
}
export default Battery;
