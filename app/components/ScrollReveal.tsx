'use client'
import React, { useRef, useEffect } from 'react'



type Props = {
  delay: number
  opacity:number
  origin?: string
  distance?:string
  viewFactor:number
  children: React.ReactNode
  className?: string
  scrollEventFlag?:boolean
}

const ScrollReveal = ({ children, origin, delay, className,opacity,distance,viewFactor,scrollEventFlag=true }:Props) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        //Dynamic import
        const sr = (await import('scrollreveal')).default
        sr().reveal(sectionRef.current, {
          delay: delay,
          opacity: opacity,
          origin: origin,
          distance: distance,
          duration: 3000,
          viewFactor: viewFactor
        })
      }
    }

    animate()

  }, [delay, opacity, sectionRef, viewFactor,origin,distance])

  if (!scrollEventFlag){
    return <div className={`${className}`}>{children}</div>
  }

  return <div className={`${className}`} ref={sectionRef}>{children}</div>
}
export default ScrollReveal