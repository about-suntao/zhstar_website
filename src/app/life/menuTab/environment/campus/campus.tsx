import React from 'react'
import styles from './campus.module.scss'
import Image from 'next/image'

import img1 from '../../../../../../public/img/life/campus.webp'

function Campus() {
  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h2>校园环境</h2>
            <p>Campus Environment</p>
          </div>
          <div className={styles.text}>
            <p>校园整体设计华美大气，风格新颖独特，设施配备先进完善。建有室外标准400米跑道，运动场1个，室内体育馆2个，室外篮球场5片。拥有标准的学生宿舍、图书馆、阅览室、物理实验室、化学实验室、生物实验室、电脑教室、科技教室、美术教室、音乐教室、钢琴教室和舞蹈教室等。</p>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={img1} alt=''></Image>
        </div>
      </div>
    </section>
  )
}

export default Campus
