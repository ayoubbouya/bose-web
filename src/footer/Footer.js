import React from "react";
import styles from "./footer.module.css";
import girl from "./images/girl.png";
import logo from "./images/logoBlack.svg";

function Footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <footer className={styles.footer}>
          <img className={styles.girl} src={girl} alt="girl" />
          <form className={styles.form}>
            <h1 className={styles.heading1}>Being first has its perks</h1>
            <p className={styles.paragraph}>
              Sign up to get more information about Bose, exclusive first looks
              at promotions, new products and more.
            </p>
            <div className={styles.btns}>
              <input className={styles.input} />
              <button className={styles.btn}>sign up</button>
            </div>
          </form>
        </footer>
      </div>
      <ul className={styles.nav}>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li className={styles.link}>Headphones</li>
        <li className={styles.link}>Speakers</li>
        <li className={styles.link}>Audio sunglasses</li>
        <li className={styles.link}>Support</li>
        <li className={styles.link}>Contact</li>
      </ul>
    </div>
  );
}

export default Footer;
