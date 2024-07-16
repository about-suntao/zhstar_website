import React from 'react'
import styles from './junior.module.scss'
import Image from 'next/image'

function Junior({ data }: any) {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.picture}>
                    <Image src={item.picture} alt='' width={300} height={600} priority></Image>
                  </div>
                  <div className={styles.introduce}>
                    <h3>{item.name}</h3>
                    <p className={styles.desc}>{item.desc}</p>
                    {
                      item.teachSubject &&
                      <div className={styles.list}>
                        <p><span>任教科目：</span>{item.teachSubject}</p>
                      </div>
                    }
                    {
                      item.education &&
                      <div className={styles.list}>
                        <p><span>学历：</span>{item.education}</p>
                      </div>
                    } {
                      item.ingredient &&
                      <div className={styles.list}>
                        <p><span>成分：</span>{item.ingredient}</p>
                      </div>
                    } {
                      item.position &&
                      <div className={styles.list}>
                        <p><span>职称：</span>{item.position}</p>
                      </div>
                    } {
                      item.professionalSkill &&
                      <div className={styles.list}>
                        <p><span>专业技能：</span>{item.professionalSkill}</p>
                      </div>
                    } {
                      item.intro &&
                      <div className={styles.list}>
                        <p><span>简介：</span>{item.intro}</p>
                      </div>
                    }
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Junior
