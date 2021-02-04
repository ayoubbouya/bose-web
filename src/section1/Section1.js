import React from "react";
import styles from "./section1.module.css";
import photo from "./img/photo.png";
import waves from "./img/waves.png";

function section1() {
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <img className={styles.waves} src={waves} alt="waves" />
        <img className={styles.photo} src={photo} alt="hello" />
      </section>
      <section className={styles.section2}>
        <h1 className={styles.heading1}>Perfect sound immersive world</h1>
        <p className={styles.paragraph}>
          QuietComfort 35 wireless headphones II are engineered with renowned
          noise cancellation. With the Google Assistant and Amazon Alexa
          built-in, you have instant access to millions of songs, playlists and
          more—hands free.
        </p>
      </section>
    </div>
  );
}
export default section1;
