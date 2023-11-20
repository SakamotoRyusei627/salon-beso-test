'use client'
import React, { useState } from 'react'
import NavigationLink from '@/app/components/atom/NavigationLink'
import styles from './NavigationContainer.module.scss'
import { usePathname } from 'next/navigation'

const navigationItem = [
  { linkPath: '/', text: 'HOME' },
  { linkPath: '/menu/', text: 'MENU' },
  { linkPath: '/salon/', text: 'SALON' },
  { linkPath: '/staff/', text: 'STAFF' },
  { linkPath: '/reservation/', text: 'RESERVATION' },
]

function NavigationContainer() {
  const pathname = usePathname()
  const [showFlag, setShowFlag] = useState(false)
  const changeShowFlag = () => {
    setShowFlag(!showFlag)
  }

  return (
    <>
      <div className={styles.navigationContainer}>
        <h1 className={styles.pageTitle}>Salon BESO</h1>
        <div className={styles.mainContainer}>
          <nav className={styles.pcNavigation}>
            <ol className={styles.navigationContents}>
              {navigationItem.map((item, index) => {
                let borderStyle
                if (pathname === item.linkPath) {
                  borderStyle = styles.selectedItem
                }
                return (
                  <NavigationLink
                    key={`navigationItem-${index}`}
                    style={`${styles.navigationItem} ${borderStyle}`}
                    linkPath={item.linkPath}
                  >
                    {item.text}
                  </NavigationLink>
                )
              })}
            </ol>
          </nav>
          <div className={styles.hamburger} onClick={() => {
            changeShowFlag()
          }}>
            <div className={`${styles.hamburgerIcon} ${showFlag && styles.active}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.mobileNaviArea} ${showFlag && styles.active}`}>
        {showFlag && (
          <>
            <div className={styles.mobileMainContainer}>
              <nav>
                <ol className={styles.mobileNavigationContents}>
                  {navigationItem.map((item, index) => {
                    if (index <= 2) {
                      return (
                        <NavigationLink
                          key={`navigationItem-${index}`}
                          style={styles.mobileNavigationItem}
                          linkPath={item.linkPath}
                          clickHandler={() => {
                            changeShowFlag()
                          }}
                        >
                          {item.text}
                        </NavigationLink>
                      )
                    }
                  })}
                </ol>
              </nav>
            </div>
            <div className={styles.mobileMainContainer}>
              <nav>
                <ol className={styles.mobileNavigationContents}>
                  {navigationItem.map((item, index) => {
                    if (index > 2) {
                      return (
                        <NavigationLink
                          key={`navigationItem-${index}`}
                          style={styles.mobileNavigationItem}
                          linkPath={item.linkPath}
                          clickHandler={() => {
                            changeShowFlag()
                          }}
                        >
                          {item.text}
                        </NavigationLink>
                      )

                    }
                  })}
                </ol>
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default NavigationContainer
