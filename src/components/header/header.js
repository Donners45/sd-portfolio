import React from "react";
import styles from "./header.module.scss";

function Header(props) {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.textWrapper}>
        <h1>{props.text}</h1>
        <h3>[<a href="#soft">Software</a>] & [<a href="#photo">Photography</a>]</h3>
      </div>
    </div>
  );
}

export default Header;
