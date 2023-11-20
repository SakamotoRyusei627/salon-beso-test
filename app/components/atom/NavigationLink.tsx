import React from 'react'
import Link from 'next/link'
import styles from './NavigationLink.module.scss'

type Props = {
  style: string;
  linkPath: string;
  children: React.ReactNode;
  clickHandler?: () => void
};

function NavigationLink({ style, linkPath, children, clickHandler }: Props) {
  return (
    <li className={style} onClick={() => {
      if (clickHandler) clickHandler()
    }}>
      <Link href={linkPath} legacyBehavior>
        <a className={styles.naviText}>{children}</a>
      </Link>
    </li>
  )
}

export default NavigationLink
