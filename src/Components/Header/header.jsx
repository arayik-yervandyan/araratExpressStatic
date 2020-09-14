import React from "react";
import styles from "./header.module.css";
import Navbar from "../Navbar/navbar";
import Logo from "../Logo/logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
