import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'

import bannerImg from '../../../../public/img/banner.webp'

function Banner() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.backImg}>
          <Image src={bannerImg} alt=''></Image>
        </div>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>校园生活</h1>
              <p>School Life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
