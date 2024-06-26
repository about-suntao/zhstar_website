import React from 'react'
import styles from './introduce.module.scss'
import Image from 'next/image'

import small from '../../../../public/img/home/small.webp'
import middle from '../../../../public/img/home/middle.webp'
import high from '../../../../public/img/home/high.webp'

function Introduce() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>珠海希望之星实验学校</h2>
          <p>ZhuHai Star Experimental School</p>
        </div>
        <div className={styles.text}>
          <p>珠海市希望之星实验学校成立于1997年，隶属北大青鸟文教集团，是一所集小学、初中、高中为一体的现代化寄宿制、封闭式学校，珠海市第一所市一级民办学校。坚持“五育并举、全面发展”的办学理念，坚持“立德树人”的基本原则，重视通过学校德育活动育人、树人、发展人。</p>
        </div>
        <div className={styles.icon}>
          <div className={styles.icon_item}>
            <Image src={small} alt=''></Image>
          </div>
          <div className={styles.icon_item}>
            <hr />
          </div>
          <div className={styles.icon_item}>
            <Image src={middle} alt=''></Image>
          </div>
          <div className={styles.icon_item}>
            <hr />
          </div>
          <div className={styles.icon_item}>
            <Image src={high} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduce
