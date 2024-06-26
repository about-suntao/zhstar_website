import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'

import bannerImg from '../../../../public/img/banner.webp'

function DepartmentBanner() {

  const str = '我校实行小班制教学，坚持"五育井举、全面发展"的办学理念，坚持"立德树人"的基本原则，重视通过学校德育活动育人、树人、发展人。遵循校本课程的理念，根据学生的发展特点，多角度挖掘特色课程，多途径开展课程活动。'

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.backImg}>
          <Image src={bannerImg} alt=''></Image>
        </div>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>学部建设</h1>
              <p>Department Construction</p>
            </div>
            <div className={styles.introduce}>
              <p>{str}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentBanner
