'use client'
import React, { useState } from 'react'
import styles from './menuTab.module.scss'
import Image from 'next/image'

import Tabs from './tabs/tabs'
import InternationalComponent from './international/international'

import imgS1 from '../../../../public/img/department/s1.webp'
import imgS2 from '../../../../public/img/department/s2.webp'
import imgS3 from '../../../../public/img/department/s3.webp'
import imgM1 from '../../../../public/img/department/m1.webp'
import imgM2 from '../../../../public/img/department/m2.webp'
import imgM3 from '../../../../public/img/department/m3.webp'
import imgH1 from '../../../../public/img/department/h1.webp'
import imgH2 from '../../../../public/img/department/h2.webp'
import imgH3 from '../../../../public/img/department/h3.webp'

function MenuTab() {

  const [activeMenu, setActiveMenu] = useState(4)

  const data = [
    {
      id: 1,
      title: '小学部',
      titleEn: 'primary school',
      describe: '珠海希望之星实验学校小学部致力于为学生打下坚实的学术基础。通过富有创意的课程设计和丰富多彩的课外活动，激发学生的好奇心和学习兴趣。小学部不仅重视阅读、写作、数学和科学能力的培养，还通过艺术、音乐和体育课程促进学生的全面发展。<br/> 教师团队充满爱心与耐心，致力于为每个孩子创造一个快乐而充实的学习环境，让他们在探索与发现中成长。',
      pictures: [
        { id: 1, url: imgS1 },
        { id: 2, url: imgS2 },
        { id: 3, url: imgS3 },
      ],
    },
    {
      id: 2,
      title: '初中部',
      titleEn: 'junior high school',
      describe: '初中学生的学术深度和广度在这个阶段更为重要，需要鼓励他们在更高的学术挑战中自我突破。<br/> 课程涵盖了丰富的学科内容，包括语言文学、数学、科学、人文社科、艺术和体育。通过项目学习、实验课程和社会实践活动，学生在理论和实践中得到充分的发展。<br/>  初中部教师团队经验丰富，善于发现和培养学生的潜力，帮助他们为高中阶段的学习做好充分准备。',
      pictures: [
        { id: 1, url: imgM1 },
        { id: 2, url: imgM2 },
        { id: 3, url: imgM3 },
      ],
    },
    {
      id: 3,
      title: '高中部',
      titleEn: 'high school',
      describe: '高中部致力于培养具有国际竞争力的综合型人才。提供多样化的课程选择，包括国家课程和国际课程，以满足不同学生的兴趣和未来发展方向。<br/> 高中部不仅关注学生的学术成就，还注重个人发展，鼓励他们参与各种竞赛、社团活动和志愿服务，提升领导力和社会责任感。<br/> 教师团队经验丰富，专业知识扎实，致力于帮助学生取得卓越的学术成绩，并为他们进入世界一流大学奠定坚实基础。',
      pictures: [
        { id: 1, url: imgH1 },
        { id: 2, url: imgH2 },
        { id: 3, url: imgH3 },
      ],
    },
    {
      id: 4,
      title: '国际部',
      titleEn: '',
      describe: '',
      pictures: [],
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
          activeMenu === 4 ?
            <InternationalComponent></InternationalComponent>
            : <Tabs data={data[activeMenu - 1]} ></Tabs>
        }
      </div>
    </div>
  )
}

export default MenuTab
