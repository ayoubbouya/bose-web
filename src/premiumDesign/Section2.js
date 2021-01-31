import React from "react";
import styles from "./section2.module.css";
import casque from "./img/group32.png";
import union1 from "./img/Union1.png";
import union2 from "./img/Union2.png";

function Section2() {
  return (
    <div>
      <h1 className={styles.heading}>Premium design</h1>
      <p className={styles.paragraph}>
        When you want to take your music anywhere, you need headphones built to
        keep up. With impact-resistant materials, glass-filled nylon, and
        corrosion-resistant stainless steel, they’re engineered to survive life
        on the go.
      </p>
      <div className={styles.containerPictures}>
        <div className={styles.containerUnions}>
          <img className={styles.union2} src={union2} alt="union2" />
          <img className={styles.union1} src={union1} alt="union1" />
        </div>
        <img className={styles.casque} src={casque} alt="casque" />
      </div>
    </div>
  );
}
export default Section2;
