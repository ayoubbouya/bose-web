import React, { useState } from "react";
import plusPic from "./img/plus.svg";
import styles from "./section2.module.css";

function PlusStandard(props) {
  const [plus, setPlus] = useState(false);
  const { top, left, positionTriangle } = props;
  return (
    <div
      className={styles.plus}
      style={{
        top: top + "rem",
        left: left + "rem",
        flexDirection: positionTriangle ? "row-reverse" : "",
      }}
    >
      <img
        className={styles.plusPic}
        onMouseEnter={() => setPlus(true)}
        onMouseLeave={() => setPlus(false)}
        src={plusPic}
        alt="plus"
      />

      {plus ? (
        <div
          className={styles.triangle}
          style={{
            backgroundColor: "white",
            position: "absolute",
          }}
        >
          <h5>{props.heading1}</h5>
          <p>{props.paragraph1}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default PlusStandard;
