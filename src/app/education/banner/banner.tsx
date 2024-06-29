import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'

import bannerImg from '../../../../public/img/banner.webp'

function Banner() {

  const str = '我校引进名师骨干全职加盟，聘请经验丰富、年富力强的优秀教师。教师结构配备合理，教学能力突出，是一支善教勤教的、有扎实学识功底的、有坚定教育理想信念的、有高尚道德情操的、有浓厚仁爱之心的师资团队。'

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.backImg}>
          <Image src={bannerImg} alt=''></Image>
        </div>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>教育教学</h1>
              <p>Education</p>
            </div>
            <div className={styles.introduce}>
              <p>{str}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
