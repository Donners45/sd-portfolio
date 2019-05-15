import React from "react";
import Navbar from "react-bootstrap/Navbar"
import styles from './navigation.module.scss'

function Navigation(props) {
  return (
      <Navbar bg="dark" fixed="top" variant="dark">
        <Navbar.Brand href="#home" className={styles.logo}>SD</Navbar.Brand>
      </Navbar>
  );
}

export default Navigation;
