import React from 'react'
import styles from './schedule.module.scss'
import Image from 'next/image'
import tableImg from '../../../../../../public/img/department/schedule.webp'

function Schedule() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
            <h2>课程安排</h2>
            <p>Curriculum Schedule</p>
        </div>
        <div className={styles.table}>
            <Image src={tableImg} alt=''></Image>
        </div>
      </div> 
    </div>
  )
}

export default Schedule
