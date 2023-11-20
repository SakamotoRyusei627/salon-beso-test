'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from 'app/page.module.scss'
import logo from '../public/images/whiteSalonBesoLogo.png'
import salonBesoImage1 from '../public/images/salonBesoImage1.jpg'
import salonBesoImage2 from '../public/images/salonBesoImage2.jpg'
import salonBesoImage3 from '../public/images/salonBesoImage3.jpg'
import salonBesoImage4 from '../public/images/salonBesoImage4.jpg'

const changeImageTime = 1000
const changeImageWaitTime = 3000
const interValTime = 10
const setFluctuationWidth = 100 / (changeImageTime / interValTime)
const zIndexSetting = [-2, -3, -4, -5]
const elementWidthArr = [100, 100, 100, 100]
const imageVolume = 4
let setIntervalTime = changeImageWaitTime

export default function Home() {
  const [width, setWidth] = useState(elementWidthArr)
  const [zIndex, setZIndex] = useState(zIndexSetting)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const setIntervalFunc = () => {
      setIntervalTime = interValTime
      if (width[activeIndex] > 0) {
        setWidth(prevArray => prevArray.map((elem, i) => {
          if (i === activeIndex) {
            const result = elem - setFluctuationWidth
            return result > 0 ? result : 0
          }
          return elem
        }))
      } else {
        const newZIndex = [...zIndex]
        const firstElement = newZIndex.pop()
        newZIndex.unshift(firstElement!)
        setZIndex(newZIndex)

        setWidth(elementWidthArr)

        if (imageVolume - 1 === activeIndex) {
          setActiveIndex(0)
        } else {
          setActiveIndex(activeIndex + 1)
        }
        setIntervalTime = changeImageWaitTime
      }
    }

    const interval = setInterval(setIntervalFunc, setIntervalTime)
    return () => clearInterval(interval)
  }, [activeIndex, width, zIndex])

  return (
    <>
      <div className={styles.imageContainer1} style={{ width: `${width[0]}%`, zIndex: zIndex[0] }}>
        <Image className={styles.salonImage1} style={{ zIndex: zIndex[0] }} src={salonBesoImage1}
               alt={'サロンベソのイメージ画像1'} priority={true} />
      </div>
      <div className={styles.imageContainer2} style={{ width: `${width[1]}%`, zIndex: zIndex[1] }}>
        <Image className={styles.salonImage2} style={{ zIndex: zIndex[1] }} src={salonBesoImage2}
               alt={'サロンベソのイメージ画像2'} priority={false}/>
      </div>
      <div className={styles.imageContainer3} style={{ width: `${width[2]}%`, zIndex: zIndex[2] }}>
        <Image className={styles.salonImage3} style={{ zIndex: zIndex[2] }} src={salonBesoImage3}
               alt={'サロンベソのイメージ画像3'} priority={false}/>
      </div>
      <div className={styles.imageContainer4} style={{ width: `${width[3]}%`, zIndex: zIndex[3] }}>
        <Image className={styles.salonImage4} style={{ zIndex: zIndex[3] }} src={salonBesoImage4}
               alt={'サロンベソのイメージ画像4'} priority={false}/>
      </div>
      <Image className={`${styles.salonLogo} ${styles.mobileSalonLogo}`} src={logo} alt="サロンベソのロゴ" priority={true}/>
    </>
  )
}
