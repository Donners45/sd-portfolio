import React from "react";
import styles from "./header.module.scss";
import { Link } from 'react-router-dom'


function Header(props) {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.textWrapper}>
        <h1>{props.text}</h1>
        <h3> <Link to="/">Software</Link> & <Link to="/foto">Photography</Link></h3>
      </div>
    </div>
  );
}

export default Header;
