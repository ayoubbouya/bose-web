import React, { useState } from "react";
import styles from "./Cover.module.css";
import bitmap from "../img/Bitmap.svg";
import ellipse from "../img/Ellipse.png";
import union from "../img/Union.png";
import union1 from "../img/Union-1.png";

function Cover() {
  const [selected, setSelected] = useState("Silver");
  const [selectedStyle, setSelectedStyle] = useState(0);

  return (
    <div>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading1}>
            QuietComfort 35 wireless headphones II
          </h1>
          <p>Select your color:</p>
          <ul className={styles.colors}>
            <li
              className={
                styles.ellipse1 +
                " " +
                (selectedStyle === 0 ? styles.selectedEllipse : "")
              }
              onClick={() => {
                setSelectedStyle(0);
              }}
              onClick={() => {
                setSelected("Silver");
              }}
            >
              <div className={styles.circle1}>
                <div className={styles.circle2}>
                  <div className={styles.circle3}></div>
                </div>
              </div>
            </li>
            <li
              className={
                styles.ellipse2 +
                " " +
                (selected === "Ellipse 2" ? styles.selectedEllipse : "")
              }
              onClick={() => {
                setSelected("Ellipse 2");
              }}
            ></li>
            <li
              className={
                styles.ellipse3 +
                " " +
                (selected === "Ellipse 3" ? styles.selectedEllipse : "")
              }
              onClick={() => {
                setSelected("Ellipse 3");
              }}
            ></li>
            <li
              className={
                styles.ellipse4 +
                " " +
                (selected === "Ellipse 2" ? styles.selectedEllipse : "")
              }
              onClick={() => {
                setSelected("Ellipse 4");
              }}
            ></li>
            <li
              className={
                styles.ellipse5 +
                " " +
                (selected === "Ellipse 5" ? styles.selectedEllipse : "")
              }
              onClick={() => {
                setSelected("Ellipse 5");
              }}
            ></li>
          </ul>
          <span className={styles.selectedDefault}>{selected}</span>

          <div className={styles.priceContainer}>
            <span className={styles.price}>229.95$</span>
            <button className={styles.btnBuy}>buy now</button>
          </div>
        </div>
        <div className={styles.images}>
          <img className={styles.union} src={union} alt="" />
          <img className={styles.union1} src={union1} alt="" />
          <img className={styles.bitmap} src={bitmap} alt="" />
          <img className={styles.ellipse} src={ellipse} alt="" />
        </div>
      </section>
    </div>
  );
}
export default Cover;
