import React from 'react'
import styles from './data.module.scss'
function Data() {

  const data = [
    {
      id: 1,
      num: '90%',
      pTop: '以上教师',
      pBottom: '具有硕士及以上学历',
    }, {
      id: 2,
      num: '60%',
      pTop: '具有海外教学',
      pBottom: '或学习经历的教师',
    }, {
      id: 3,
      num: '80%',
      pTop: '以上的教师',
      pBottom: '拥有10年以上的教学经验',
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <p className={styles.num}>{item.num}</p>
                  <p className={styles.desc}>{item.pTop}</p>
                  <p className={styles.desc}>{item.pBottom}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Data
