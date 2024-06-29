'use client'
import React, { useState } from 'react'
import styles from './menuTab.module.scss'
import Image from 'next/image'

import TeacherTeam from './teacherTeam/teacherTeam'
import Schedule from './schedule/schedule'

function MenuTab() {

  const data = [
    {
      id:1,
      title:'师资团队',
    },{
      id:2,
      title:'学校作息表',
    },
  ]

  const [activeMenu, setActiveMenu] = useState(1)

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
          <TeacherTeam></TeacherTeam>
          : <Schedule></Schedule>
        }
      </div>
    </div>
  )
}

export default MenuTab
