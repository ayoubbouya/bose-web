import React from "react";
import styles from "./Header.module.css";
import logo from "../img/logo.svg";
import group17 from "../img/Group17.svg";
import group21 from "../img/Group21.svg";
import vector from "../img/Vector.svg";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar className={styles.navbar} collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#headphones" className={styles.navLink}>
            Headphones
          </Nav.Link>
          <Nav.Link href="#speakers" className={styles.navLink}>
            Speakers
          </Nav.Link>
          <Nav.Link href="#audio" className={styles.navLink}>
            Audio sunglasses
          </Nav.Link>
          <Nav.Link href="#support" className={styles.navLink}>
            Support
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#support">
            <img className={styles.icon} src={group17} alt="" />
          </Nav.Link>
          <Nav.Link href="#support">
            <img className={styles.icon} src={vector} alt="" />
          </Nav.Link>
          <Nav.Link href="#support">
            <img className={styles.iconGroup21} src={group21} alt="" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
