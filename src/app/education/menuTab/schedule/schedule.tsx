import React from 'react'
import styles from './schedule.module.scss'
import Image from 'next/image'

import tableImg from '../../../../../public/img/education/schedule.webp'

function Schedule() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.table}>
            <Image src={tableImg} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Schedule
