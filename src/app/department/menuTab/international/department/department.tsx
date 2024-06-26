import React from 'react'
import styles from './department.module.scss'
import Image from 'next/image'

import img1 from '../../../../../../public/img/department/d1.webp'
import img2 from '../../../../../../public/img/department/d2.webp'
import goldImg from '../../../../../../public/img/department/gold.webp'



function Department() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.international}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h2>国际部</h2>
              <p>International Department</p>
            </div>
            <div className={styles.desc}>
              <p>珠海希望之星实验学校国际部秉承国际领先的教育理念，专为渴望冲刺世界顶尖名校的学生提供支持与指导。致力于打造全面发展的学术环境，培养学生的学术深度和全球视野。</p>
              <p>国际部拥有丰富的国际教育资源和优质的教学团队，致力于帮助学生在语言能力、学术水平和综合素质上全面提升。</p>
              <p>国际部开设多种课程，包括IGCSE、A-Level和AP课程，满足学生在不同学习阶段和学术兴趣方向的需求。从打下坚实的语言基础到提升学术水平，帮助他们实现进入理想大学的梦想。</p>
            </div>
          </div>
          <div className={styles.right}>
            <Image src={img1} alt=''></Image>
          </div>
        </div>
        <div className={styles.goal}>
          <div className={styles.left}>
            <Image src={img2} alt=''></Image>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              <h2>升学目标</h2>
              <p>Admission Goal</p>
            </div>
            <div className={styles.gold}>
              <Image src={goldImg} alt=''></Image>
              <h3>100%学生申请到全球QS排名前80大学</h3>
            </div>
            <div className={styles.list}>
              <h4>AP方向</h4>
              <p>80%的学生录取进入美国排名前50大学</p>
            </div>
            <div className={styles.list}>
              <h4>A-Level</h4>
              <p>方向 50%的学生升入英国前5大学 </p>
              <p>20%的学生中国香港前3、新加坡前2大学</p>
            </div>
          </div>
          <div className={styles.leftMobile}>
            <Image src={img2} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Department
