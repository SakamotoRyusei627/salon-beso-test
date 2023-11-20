import React from 'react'
import styles from './page.module.scss'
import hotppepper from '../../public/images/hotpepper.gif'
import Image from 'next/image'


function QaPage() {
  return (
    <>
      <div className={styles.reservationPageContainer}>
        <p className={styles.salonDeBellezaText}>Salon de belleza</p>
        <h2 className={styles.besoText}>BESO</h2>
        <div className={styles.contents}>
          <div className={styles.info}>
            <h3 className={styles.pc}>SalonBESOをご利用の方は下記リンクからご予約お願いします。</h3>
            <h3 className={styles.sp}>SalonBESOをご利用の方は<br/>下記リンクからご予約お願いします。</h3>
            <Image src={hotppepper} className={styles.image} alt={'ホットペッパーのバナー'}/>

            <ol className={styles.menuList}>
              <li>eye MENU</li>
              <li>hair MENU</li>
            </ol>

            <div className={styles.LINEInfo}>
              <h3>お得なクーポン配信中</h3>
              <p>LINE公式アカウントID:5555555555</p>
              <p>QRコード</p>
            </div>
          </div>
          <div className={styles.jobOffer}>
            <p>求人募集要項</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default QaPage
