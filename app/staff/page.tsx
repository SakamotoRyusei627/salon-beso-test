'use client'
import React, { useState } from 'react'
import styles from './page.module.scss'
import StaffInfo from '@/app/staff/StaffInfo'
import classNames from 'classnames'
import LeftImageTextContents from '@/app/components/organism/LeftImageTextContents'
import store from '../../public/images/store.jpg'


function ProfilePage() {
  const [name, setName] = useState('AikoFujii')
  return (
    <>
      <div className={styles.staffPageContainer}>
        <p className={styles.salonDeBellezaText}>Salon de belleza</p>
        <h2 className={styles.besoText}>BESO</h2>


        <div className={styles.PCDetailMenuContainer}>
          <ul className={styles.sideMenu}>
            <li className={classNames(styles.listItem, { [styles.select]: name === 'AikoFujii' })}
                onClick={() => setName('AikoFujii')}>Aiko Fujii
            </li>
            <li className={classNames(styles.listItem, { [styles.select]: name === 'AiOgawa' })}
                onClick={() => setName('AiOgawa')}>Ai Ogawa
            </li>
            <li className={classNames(styles.listItem, { [styles.select]: name === 'SayuriMitani' })}
                onClick={() => setName('SayuriMitani')}>Sayuri Mitani
            </li>
            <li className={classNames(styles.listItem, { [styles.select]: name === 'YukariMiyamoto' })}
                onClick={() => setName('YukariMiyamoto')}>Yukari Miyamoto
            </li>
          </ul>
          <StaffInfo name={name}/>
        </div>
        <div className={styles.SPDetailMenuContainer}>
          <LeftImageTextContents title={'Salon'} contentsImagePath={store} contentsImageAlt={'店前の写真'}
                                 scrollEventFlag={false}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </LeftImageTextContents>
        </div>


      </div>
    </>

  )
}

export default ProfilePage
