import styles from './staffInfo.module.scss'
import icon from './cornerIcon.png'
import Image from 'next/image'
import React from 'react'
import AiOgawa1 from 'public/images/person/AiOgawa1.jpg'
import AiOgawa2 from 'public/images/person/AiOgawa2.jpg'
import AikoFujii1 from 'public/images/person/AikoFujii1.jpg'
import AikoFujii2 from 'public/images/person/AikoFujii2.jpg'
import ScrollReveal from '@/app/components/ScrollReveal'
import classNames from 'classnames'


type Props = {
  name: string;
}
// styles.detailContainer
export default function StaffInfo({ name }: Props) {
  switch (name) {
    case 'AikoFujii':
      return (
        <div className={styles.detailContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageItem1}>
              <figure className={styles.figure}>
                <Image
                  fill
                  style={{ objectFit: 'cover', borderRadius: '4px' }}
                  src={AikoFujii1}
                  alt="藤井愛子さんの顔写真"
                  priority={true}/>
              </figure>
            </div>
            <div className={styles.imageItem2}>
              <figure className={styles.figure}>
                <Image
                  fill
                  style={{ objectFit: 'cover', borderRadius: '4px' }}
                  src={AikoFujii2}
                  alt="藤井愛子さんの顔写真"
                  priority={true}/>
              </figure>
            </div>
          </div>
          <div className={styles.PRContainer}>

            <p className={styles.PRText}>texttexttexttexttexttexttexttexttexttexttexttext</p>

          </div>
        </div>
      )
    case 'AiOgawa':
      return (
        <div className={styles.detailContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageItem1}>
              <figure className={styles.figure}>
                <Image
                  fill
                  style={{ objectFit: 'cover', borderRadius: '4px' }}
                  src={AiOgawa1}
                  alt="小河愛さんの顔写真"
                />
              </figure>
            </div>
            <div className={styles.imageItem2}>
              <figure className={styles.figure}>
                <Image
                  fill
                  style={{ objectFit: 'cover', borderRadius: '4px' }}
                  src={AiOgawa2}
                  alt="小河愛さんの顔写真"
                />
              </figure>
            </div>
          </div>
          <div className={styles.PRContainer}>

            <p className={styles.PRText}>texttexttexttexttexttexttexttexttexttexttexttext</p>

          </div>
        </div>
      )
    case 'SayuriMitani':
      return (<></>)
    case 'YukariMiyamoto':
      return (<></>)
    default:
      return null

  }
}

