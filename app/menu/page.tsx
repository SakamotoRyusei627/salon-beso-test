'use client'
import React from 'react'
// import Link from 'next/link'
import styles from './page.module.scss'
import DetailMenu from "@/app/menu/DetailMenu";
import Access from "@/app/menu/Access";

function Menu() {
    const [title,setTitle]= React.useState("Hair")
  return (
      <>
          <div className={styles.menuPageContainer}>
              {/*<h1>ここはメニューページです</h1>*/}
              {/*<Link href={'/'}>ホームに戻る</Link>*/}
              <div className={styles.detailMenuContainer}>
                  <ul className={styles.sideMenu}>
                      <li onClick={()=>setTitle("Hair")}>Hair</li>
                      <li onClick={()=>setTitle("Esute")}>Esute</li>
                      <li onClick={()=>setTitle("Eye")}>Eye</li>
                      <li onClick={()=>setTitle("Nail")}>Nail</li>
                  </ul>
                  <DetailMenu title={title}/>
              </div>
          </div>
          <Access/>
      </>

  )
}

export default Menu

