import React from "react";
import styles from "./Nav.module.css"
import { FaBolt } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <FaBolt className={styles.FaBolt} size={55} />
        <h1 className={styles.h1}>Zeus</h1>
      </div>
      <div className={styles.links}>
        <a href="">Series</a>
        <a href="">Films</a>
        <a href="">Categories</a>
      </div>
    </div>
  );
};

export default Nav;
