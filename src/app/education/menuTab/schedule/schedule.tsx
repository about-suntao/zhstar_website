import React from 'react'
import styles from './schedule.module.scss'
import Image from 'next/image'

function Schedule() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.table}>
          <Image src={'https://icon-zhuhai.oss-cn-hangzhou.aliyuncs.com/2024/07/17/114_schedule.webp'}
            alt='' width={2000} height={5000} priority></Image>
        </div>
      </div>
    </div>
  )
}

export default Schedule
