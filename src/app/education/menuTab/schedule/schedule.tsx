import React from 'react'
import styles from './schedule.module.scss'
import Image from 'next/image'

import tableImg from '../../../../../public/img/education/schedule.webp'

function Schedule() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.table}>
          <Image src={'https://icon-zhuhai.oss-cn-hangzhou.aliyuncs.com/2024/07/17/114_schedule.webp'}
            alt='' width={600} height={2000} priority></Image>
        </div>
      </div>
    </div>
  )
}

export default Schedule
