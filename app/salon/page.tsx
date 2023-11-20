import React from 'react'
import Link from 'next/link'
import styles from './page.module.scss'
import LeftImageTextContents from '@/app/components/organism/LeftImageTextContents'
import store from '../../public/images/store.jpg'
import nail from '../../public/images/nail.jpg'
import piece from '../../public/images/piece.jpg'
import cutRoom from '../../public/images/cutRoom.jpg'
import RightImageTextContents from '@/app/components/organism/RightImageTextContents'

const contentItems = [
  {
    title: 'Salon',
    contentsImagePath: store,
    contentsImageAlt: 'テストイメージ画像',
    text: `テキスト<br/>text`
  }
]


function Salon() {
  return (
    <>
      <div className={styles.salonPageContainer}>
        <p className={styles.salonDeBellezaText}>Salon de belleza</p>
        <h2 className={styles.besoText}>BESO</h2>
        <div className={styles.contents}>
          <LeftImageTextContents title={'Salon'} contentsImagePath={store} contentsImageAlt={'店前の写真'}
                                 scrollEventFlag={false}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </LeftImageTextContents>
        </div>

        <div className={styles.contents}>
          <RightImageTextContents title={'Cut'} contentsImagePath={cutRoom} contentsImageAlt={'髪を切るスペースの写真'}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </RightImageTextContents>
        </div>

        <div className={styles.contents}>
          <LeftImageTextContents title={'Nail'} contentsImagePath={nail}
                                 contentsImageAlt={'ネイルをするスペースの写真'}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </LeftImageTextContents>
        </div>

        <div className={styles.contents}>
          <RightImageTextContents title={'piece'} contentsImagePath={piece} contentsImageAlt={'グッズの写真'}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </RightImageTextContents>
        </div>
      </div>
    </>
  )
}

export default Salon

