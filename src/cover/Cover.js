import React, { useState } from "react";
import styles from "./Cover.module.css";
import bitmap from "../img/Bitmap.svg";
import ellipse from "../img/Ellipse.png";
import union from "../img/Union.png";
import union1 from "../img/Union-1.png";

function Cover() {
  const [selected, setSelected] = useState("color1");

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
                (selected === "color1" ? styles.selectedDefault1 : "")
              }
              onClick={() => {
                setSelected("color1");
              }}
            >
              <div className={selected === "color1" ? styles.circle1 : ""}>
                <div className={selected === "color1" ? styles.circle2 : ""}>
                  <div
                    className={selected === "color1" ? styles.circle3 : ""}
                  ></div>
                </div>
              </div>
            </li>

            <li
              className={
                styles.ellipse2 +
                " " +
                (selected === "color2" ? styles.selectedDefault2 : "")
              }
              onClick={() => {
                setSelected("color2");
              }}
            >
              <div className={selected === "color2" ? styles.circle01 : ""}>
                <div className={selected === "color2" ? styles.circle02 : ""}>
                  <div
                    className={selected === "color2" ? styles.circle03 : ""}
                  ></div>
                </div>
              </div>
            </li>
            <li
              className={
                styles.ellipse3 +
                " " +
                (selected === "color3" ? styles.selectedDefault3 : "")
              }
              onClick={() => {
                setSelected("color3");
              }}
            >
              <div className={selected === "color3" ? styles.circle001 : ""}>
                <div className={selected === "color3" ? styles.circle002 : ""}>
                  <div
                    className={selected === "color3" ? styles.circle003 : ""}
                  ></div>
                </div>
              </div>
            </li>

            <li
              className={
                styles.ellipse4 +
                " " +
                (selected === "color4" ? styles.selectedDefault4 : "")
              }
              onClick={() => {
                setSelected("color4");
              }}
            >
              <div className={selected === "color4" ? styles.circle0001 : ""}>
                <div className={selected === "color4" ? styles.circle0002 : ""}>
                  <div
                    className={selected === "color4" ? styles.circle0003 : ""}
                  ></div>
                </div>
              </div>
            </li>
            <li
              className={
                styles.ellipse5 +
                " " +
                (selected === "color5" ? styles.selectedDefault5 : "")
              }
              onClick={() => {
                setSelected("color5");
              }}
            >
              {" "}
              <div className={selected === "color5" ? styles.circle00001 : ""}>
                <div
                  className={selected === "color5" ? styles.circle00002 : ""}
                >
                  <div
                    className={selected === "color5" ? styles.circle00003 : ""}
                  ></div>
                </div>
              </div>
            </li>
          </ul>
          <span
            className={
              styles.selected +
              " " +
              (selected === "color1" ? styles.color1 : styles.hide)
            }
          >
            {selected}
          </span>
          <span
            className={
              styles.selected +
              " " +
              (selected === "color2" ? styles.color2 : styles.hide)
            }
          >
            {selected}
          </span>
          <span
            className={
              styles.selected +
              " " +
              (selected === "color3" ? styles.color3 : styles.hide)
            }
          >
            {selected}
          </span>
          <span
            className={
              styles.selected +
              " " +
              (selected === "color4" ? styles.color4 : styles.hide)
            }
          >
            {selected}
          </span>
          <span
            className={
              styles.selected +
              " " +
              (selected === "color5" ? styles.color5 : styles.hide)
            }
          >
            {selected}
          </span>

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
