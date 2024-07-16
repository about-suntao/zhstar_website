import React from 'react'
import styles from './primarySchool.module.scss'
import Image from 'next/image'

function PrimarySchool({ data }: any) {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <ul>
          {
            data.map((item: any, index: any) => {
              return (
                <li key={item.id}>
                  {
                    index % 2 === 0 ?
                      <div className={styles.single}>
                        <div className={styles.picture}>
                          <Image src={item.picture} alt='' width={600} height={600} priority></Image>
                        </div>
                        <div className={styles.card}>
                          <h3>{item.name}</h3>
                          <p dangerouslySetInnerHTML={{ __html: item.intro }}></p>
                        </div>
                      </div>
                      : <div className={styles.double}>
                        <div className={styles.card}>
                          <h3>{item.name}</h3>
                          <p dangerouslySetInnerHTML={{ __html: item.intro }}></p>
                        </div>
                        <div className={styles.picture}>
                          <Image src={item.picture} alt='' width={600} height={600} priority></Image>
                        </div>
                      </div>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default PrimarySchool
