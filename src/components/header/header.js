import React from "react";
import styles from "./header.module.scss";

function Header(props) {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.textWrapper}>
        <h1>{props.text}</h1>
        <h3>[<a href="#soft">Lorum</a>] & [<a href="#photo">Ipsum</a>]</h3>
      </div>
    </div>
  );
}

export default Header;
