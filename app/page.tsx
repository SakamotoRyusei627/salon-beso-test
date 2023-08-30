"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from 'app/page.module.scss'

const changeImageTime = 1000
const changeImageWaitTime = 3000
const interValTime = 10
const setFluctuationWidth = 100 / (changeImageTime / interValTime)
const zIndexSetting = [-1, -2]
const elementWidthArr = [100, 100]
const imageVolume = 2
  let setIntervalTime = interValTime

export default function Home() {
  const [width, setWidth] = useState(elementWidthArr)
  const [zIndex, setZIndex] = useState(zIndexSetting)
  const [activeIndex, setActiveIndex] = useState(0)


  useEffect(() => {
    const setIntervalFunc = () => {
      console.log(width)
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
        const firstElement = newZIndex.shift()
        newZIndex.push(firstElement!)
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
      <div className={styles.imageContainer1} style={{ width: `${width[0]}%`,zIndex: zIndex[0]  }}>
        <img className={styles.salonImage1} style={{ zIndex: zIndex[0] }} src={'/images/salonBesoImage1.jpg'}
             alt={'サロンベソのイメージ画像1'}/>
      </div>
      <div className={styles.imageContainer2} style={{ width: `${width[1]}%`,zIndex: zIndex[1]  }}>
        <img className={styles.salonImage2} style={{ zIndex: zIndex[1] }} src={'/images/salonBesoImageTest2.jpg'}
             alt={'サロンベソのイメージ画像2'}/>
      </div>
      {/*<img className={styles.salonLogo} src={'/images/whiteSalonBesoLogo.png'} alt={'サロンベソのロゴ'}/>*/}
      <Image className={styles.salonLogo} src="/images/whiteSalonBesoLogo.png" alt="サロンベソのロゴ" width={500} height={500}/>
    </>
  )
}
