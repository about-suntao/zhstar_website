'use client'
import React, { useState } from 'react'
import styles from './menuTab.module.scss'
import Image from 'next/image'

import Environment from './environment/environment'
import Service from './service/service'
import Speech from './speech/speech'

function MenuTab() {

  const [activeMenu, setActiveMenu] = useState(1)

  const data = [
    {
      id: 1,
      title: '校园环境',
    }, {
      id: 2,
      title: '生活服务',
    }, {
      id: 3,
      title: '国旗下讲话',
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.menu}>
        <ul>
          {
            data.map((item) => {
              return (
                <li
                  onClick={() => setActiveMenu(item.id)}
                  className={`${activeMenu === item.id ? styles.activeMenu : ''}`}
                  key={item.id}>
                  <p>{item.title}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className={styles.tabs}>
        {
          activeMenu === 1 ?
            <Environment></Environment>
            : activeMenu === 2 ?
              <Service></Service>
              : <Speech></Speech>
        }
      </div>
    </div>
  )
}

export default MenuTab
