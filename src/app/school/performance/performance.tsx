import React from 'react'
import styles from './performance.module.scss'
import Image from 'next/image'

import img1 from '../../../../public/img/school/p1.png'
import img2 from '../../../../public/img/school/p2.png'

import triangleImg from '../../../../public/img/school/triangle.png'

function Performance() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>办学成绩</h2>
          <p>School performance</p>
        </div>
        <div className={styles.desc}>
          <p>我校办学以来，办学成绩突出。优异的教育质量，丰硕的办学成果，赢得了社会各界的广泛关注与高度赞誉。</p>
        </div>
        <div className={styles.picture}>
          <Image src={img1} alt=''></Image>
          <Image src={img2} alt=''></Image>
        </div>
        <div className={styles.card}>
          {/* <div className={styles.serial}>
            <p>01</p>
          </div> */}
          <div className={styles.card_title}>
            <span>竞赛</span>
            <p>近几年来，我校学生共获得：</p>
          </div>
          <div className={styles.triangle}>
            <Image src={triangleImg} alt=''></Image>
          </div>
          <div className={styles.card_desc}>
            <p>国际金奖16枚、银奖5枚、铜奖5枚；国家级一等奖35人次、二等奖18人次、三等奖36人次；省级一等奖2人次，二等奖2人次，三等奖3人次；市级一等奖39人次，二等奖32人次，三等奖31人次。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance
