import React from "react";
import styles from "./Header.module.scss";
import NavigationContainer from "@/app/components/molecule/NavigationContainer";

function Header() {
  return (
    <header className={styles.headerContainer}>
        <NavigationContainer />
    </header>
  );
}

export default Header;
