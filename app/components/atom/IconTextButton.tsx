import React from "react";
import styles from "app/components/atom/IconTextButton.module.scss";
import Link from "next/link";

type Props = {
  className: string;
  linkPath: string;
  children: React.ReactNode;
  reactIcon: React.JSX.Element;
};

function IconTextButton({
  className = "",
  linkPath,
  children = "",
  reactIcon = <></>,
}: Props) {
  return (
    <div className={`${styles.buttonDefault} ${className}`}>
      <Link href={linkPath} legacyBehavior>
        <a className={styles.itemsBox}>
          {reactIcon}
          {children}
        </a>
      </Link>
    </div>
  );
}

export default IconTextButton;
