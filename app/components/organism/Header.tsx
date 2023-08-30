import React from "react";
import styles from "app/components/organism/Header.module.scss";
import NavigationContainer from "@/app/components/molecule/NavigationContainer";

function Header() {
  console.log("ヘッダーのコンポーネント");
  return (
    <header className={styles.headerContainer}>
        <NavigationContainer />
    </header>
  );
}

export default Header;
