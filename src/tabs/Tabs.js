import React, { useState } from "react";
import styles from "./tabs.module.css";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <ul className={styles.container}>
        <li
          className={
            styles.list + " " + (selectedTab === 0 ? styles.borderElement : "")
          }
          onClick={() => {
            setSelectedTab(0);
          }}
        >
          Overview{" "}
        </li>
        <li
          className={
            styles.list +
            " " +
            (selectedTab === "specs" ? styles.borderElement : "")
          }
          onClick={() => {
            setSelectedTab("specs");
          }}
        >
          Specs
        </li>
        <li
          className={
            styles.list +
            " " +
            (selectedTab === "Reviews" ? styles.borderElement : "")
          }
          onClick={() => {
            setSelectedTab("Reviews");
          }}
        >
          Reviews
        </li>
        <li
          className={
            styles.list +
            " " +
            (selectedTab === "Accessories" ? styles.borderElement : "")
          }
          onClick={() => {
            setSelectedTab("Accessories");
          }}
        >
          Accessories
        </li>
        <li
          className={
            styles.list +
            " " +
            (selectedTab === "Support" ? styles.borderElement : "")
          }
          onClick={() => {
            setSelectedTab("Support");
          }}
        >
          Support
        </li>
      </ul>
      <div className={styles.borderBottom}></div>
    </div>
  );
}

export default Tabs;
