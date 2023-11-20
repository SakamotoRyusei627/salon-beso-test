import React from 'react'
import styles from './RightImageTextContents.module.scss'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import ScrollReveal from '@/app/components/ScrollReveal'


type Props = {
  title: string,
  children: React.ReactNode,
  contentsImagePath: string | StaticImport,
  contentsImageAlt: string
  scrollEventFlag?:boolean

}

function LeftImageTextContents({ title, children, contentsImagePath, contentsImageAlt,scrollEventFlag=true }: Props) {
  return (
    <>
      <section className={styles.contentContainer}>
        <h3 className={styles.contentTitle}>{title}</h3>
        <hr className={styles.hr}/>

        <div className={styles.content}>
          <ScrollReveal className={styles.textArea} delay={800} distance="20px" opacity={0} origin="bottom"
                        viewFactor={0.1} scrollEventFlag={scrollEventFlag}>
            <p>{children}</p>
          </ScrollReveal>

          <ScrollReveal className={styles.imageArea} delay={400} distance="20px" opacity={0} origin="bottom"
                        viewFactor={0.1} scrollEventFlag={scrollEventFlag}>
            <figure className={styles.figure} >
              <Image
                fill
                sizes="(max-width: 768px) 100vw、(max-width: 1200px) 50vw、33vw"
                className={styles.image}
                src={contentsImagePath}
                alt={contentsImageAlt}/>
            </figure>
          </ScrollReveal>

        </div>
      </section>
    </>
  )
}

export default LeftImageTextContents