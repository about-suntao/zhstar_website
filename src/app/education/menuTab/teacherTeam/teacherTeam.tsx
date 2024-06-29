'use client'
import React, { useState } from 'react'
import styles from './teacherTeam.module.scss'
import Image from 'next/image'

import PrimarySchool from './primarySchool/primarySchool'
import Junior from './junior/junior'

function TeacherTeam() {

    const  [active,setActive] = useState(1)

    const MenuData = [
        {
            id:1,
            title:'小学部教师',
        }, {
            id:2,
            title:'初中部教师',
        }, {
            id:3,
            title:'高中部教师',
        },
    ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <ul className={styles.menu}>
            {
                MenuData.map((item:any)=>{
                    return (
                        <li
                        className={`${active === item.id ? styles.activeMenu :''}`} 
                         key={item.id}
                         onClick={()=>setActive(item.id)}>
                            {item.title}
                        </li>
                    )
                })
            }
        </ul>
        <div className={styles.content}>
            {
                active === 1 ? 
                <PrimarySchool></PrimarySchool>
                :  active === 2 ? 
                 <Junior id={active}></Junior>
                : <Junior id={active}></Junior>
            }
        </div>
      </div>
    </div>
  )
}

export default TeacherTeam
