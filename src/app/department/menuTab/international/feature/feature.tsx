import React from 'react'
import styles from './feature.module.scss'
import Image  from 'next/image'

import iconImg1 from '../../../../../../public/img/department/f1.webp'
import iconImg2 from '../../../../../../public/img/department/f2.webp'
import iconImg3 from '../../../../../../public/img/department/f3.webp'
import iconImg4 from '../../../../../../public/img/department/f4.webp'
import iconImg5 from '../../../../../../public/img/department/f5.webp'
import iconImg6 from '../../../../../../public/img/department/f6.webp'

function Feature() {
    const data = [
        {
            id:1,
            logo:iconImg1,
            title:'小班教学个性辅导',
            titleEn:'Personalized Learning in Small Classes',
            descriptions:'坚持小班教学模式，确保每位学生都能得到充分的关注与个性化指导。帮助教师更好地了解每个学生的需求与潜力，提供针对性的学术支持和成长建议。'
        },{
            id:2,
            logo:iconImg2,
            title:'海内外名校师资团队',
            titleEn:'Top-notch Domestic and International Faculty',
            descriptions:'国际部汇聚了一支由海内外名校毕业的优秀教师团队。拥有丰富的教学经验和深厚的学术背景，能够为学生提供高水平的教育指导，帮助他们在学术上取得卓越成就。'
        },{
            id:3,
            logo:iconImg3,
            title:'专业辅导国际竞赛',
            titleEn:'Expert Guidance for Competitions',
            descriptions:'国际部设有专门的竞赛辅导团队，为学生提供从选题到备赛的全程指导，帮助他们在数学、科学、语言等各类国际竞赛中脱颖而出，提升竞争力和个人履历。'
        },{
            id:4,
            logo:iconImg4,
            title:'多样化课程设置',
            titleEn:'Variety of Course Options',
            descriptions:'国际部开设包括IGCSE、A-Level和AP课程在内的多种国际课程，满足学生在不同学术阶段和方向的需求。同时还提供丰富的选修课和课外活动，促进学生全面发展。'
        },{
            id:5,
            logo:iconImg5,
            title:'个性化升学指导',
            titleEn:'Personalized College Counseling',
            descriptions:'升学指导团队为每一位学生量身定制升学方案，从选校、申请文书到面试准备，全程陪伴和支持。了解最新的招生动态和要求，帮助学生实现梦想，成功进入理想大学。'
        },{
            id:6,
            logo:iconImg6,
            title:'丰富的国际交流机会',
            titleEn:'Rich International Exchange Opportunities',
            descriptions:'为学生提供多种国际交流机会，包括海外游学、国际学术交流、跨文化体验等。通过这些活动，学生能够开拓国际视野，提升跨文化沟通能力。'
        }
    ]
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
            <h2>国际部特色</h2>
            <p>Features of the International Division</p>
        </div>
        <ul>
            {
                data.map((item:any)=>{
                    return (
                        <li key={item.id}>
                            <div className={styles.icon}>
                                <Image src={item.logo} alt=''></Image>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card_title}>
                                    <h3>{item.title}</h3>
                                    <p>{item.titleEn}</p>
                                </div>
                                <div className={styles.article}>
                                    <p>{item.descriptions}</p>
                                </div>
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

export default Feature
