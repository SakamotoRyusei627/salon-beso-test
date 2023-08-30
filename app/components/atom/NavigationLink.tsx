import React from "react";
import Link from "next/link";
import styles from "./NavigationLink.module.scss"

type Props = {
  className: string;
  linkPath: string;
  children: React.ReactNode;
};

function NavigationLink({ className, linkPath, children }: Props) {
  return (
    <li className={className}>
      <Link href={linkPath} legacyBehavior>
        <a className={styles.naviText}>{children}</a>
      </Link>
    </li>
  );
}

export default NavigationLink;
