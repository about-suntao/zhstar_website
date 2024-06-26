import React from 'react'
import styles from './tabs.module.scss'
import Image from 'next/image'

function Tabs({ data }: any) {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>{data.title}</h2>
          <p>{data.titleEn}</p>
        </div>
        <div className={styles.desc}>
          <p dangerouslySetInnerHTML={{ __html: data.describe }}></p>
        </div>
        <ul>
          {
            data.pictures.map((item: any) => {
              return (
                <li key={item.id}>
                  <Image src={item.url} alt=''></Image>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Tabs
