"use client";
import React from "react";
import NavigationLink from "@/app/components/atom/NavigationLink";
import styles from "./NavigationContainer.module.scss";
import { usePathname } from "next/navigation";

const navigationItem = [
  { linkPath: "/", text: "HOME" },
  { linkPath: "/menu/", text: "MENU" },
  { linkPath: "/staff/", text: "STAFF" },
  { linkPath: "/reservation/", text: "RESERVATION" },
];

function NavigationContainer() {
  const pathname = usePathname();
  return (
    <div className={styles.navigationContainer}>
      <nav>
        <ol className={styles.navigationContents}>
          {navigationItem.map((item, index) => {
            let borderStyle;
            if (pathname === item.linkPath) {
              borderStyle = styles.selectedItem;
            }
            return (
              <NavigationLink
                key={`navigationItem-${index}`}
                className={`${styles.navigationItem} ${borderStyle}`}
                linkPath={item.linkPath}
              >
                {item.text}
              </NavigationLink>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

export default NavigationContainer;
