import React from "react";
import styles from "./Cover.module.css";
import bitmap from "../img/Bitmap.svg";
import ellipse from "../img/Ellipse.png";
import union from "../img/Union.png";
import union1 from "../img/Union-1.png";

function Cover() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading1}>
            QuietComfort 35 wireless headphones II
          </h1>
          <p>Select your color:</p>
          <ul className={styles.colors}>
            <li className={styles.ellipse1}>
              <div className={styles.circle1}>
                <div className={styles.circle2}>
                  <div className={styles.circle3}></div>
                </div>
              </div>
            </li>
            <li className={styles.ellipse2}></li>
            <li className={styles.ellipse3}></li>
            <li className={styles.ellipse4}></li>
            <li className={styles.ellipse5}></li>
          </ul>
          <span>Silver</span>
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
