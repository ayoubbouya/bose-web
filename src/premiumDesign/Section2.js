import React from "react";
import styles from "./section2.module.css";
import union1 from "./img/Union1.png";
import union2 from "./img/Union2.png";
import PlusStandard from "./PlusStandard";
import casque from "./img/casque.svg";

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
          <div className={styles.cointainerCasque}>
            <img className={styles.casque} src={casque} alt="casque" />
            <PlusStandard
              heading1="Impact resistant 1"
              paragraph1="Designed to handle life on the go 1"
              top={-41}
              left={15}
              positionTriangle={true}
            />
            <PlusStandard
              heading1="Impact resistant 2"
              paragraph1="Designed to handle life on the go 2"
              top={-17}
              left={16}
              positionTriangle={true}
            />
            <PlusStandard
              heading1="Impact resistant 3"
              paragraph1="Designed to handle life on the go 3"
              top={-41}
              left={35}
            />
            <PlusStandard
              heading1="Impact resistant 4"
              paragraph1="Designed to handle life on the go 4"
              top={-25}
              left={10}
              positionTriangle={true}
            />
            <PlusStandard
              heading1="Impact resistant 5"
              paragraph1="Designed to handle life on the go 5"
              top={-22}
              left={35}
            />
          </div>
          <img className={styles.union1} src={union1} alt="union1" />
        </div>
      </div>
    </div>
  );
}
export default Section2;
