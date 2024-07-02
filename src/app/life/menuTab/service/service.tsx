import React from 'react'
import styles from './service.module.scss'
import Image from 'next/image'

import s1 from '../../../../../public/img/life/s1.webp'
import s2 from '../../../../../public/img/life/s2.webp'
import s3 from '../../../../../public/img/life/s3.webp'

function Service() {

  const data = [
    {
      id: 1,
      picture: s1,
    }, {
      id: 2,
      picture: s2,
    }, {
      id: 3,
      picture: s3,
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>生活服务</h2>
          <p>Domestic Services</p>
        </div>
        <div className={styles.desc}>
          <p>我校膳食中心管理工作以规范化管理、标准化管理、热情服务、质量第一作为宗旨。每天供应新鲜蔬菜和水果，根据不同年龄段的孩子们成长中所需求的优质蛋白质、维生素、矿物质、膳食纤维等营养素，不断提高服务质量，严格操作规程。</p>
        </div>
        <div className={styles.picture}>
          <ul>
            {
              data.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Image src={item.picture} alt=''></Image>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Service
