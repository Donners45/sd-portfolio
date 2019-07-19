import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import styles from './navigation.module.scss'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
      <Navbar bg="dark" fixed="top" variant="dark">
        <Navbar.Brand className={styles.logo}>
          <Link to="/">SD</Link>
        </Navbar.Brand>
      </Navbar>
  );
}

export default Navigation;
