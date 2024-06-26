import React from 'react'
import styles from './dynamics.module.scss'
import Image from 'next/image'

import newsImg1 from '../../../../public/img/home/news1.webp'
import newsImg2 from '../../../../public/img/home/news2.webp'
import newsImg3 from '../../../../public/img/home/news3.webp'
import newsImg4 from '../../../../public/img/home/news4.webp'
import newsImg5 from '../../../../public/img/home/news5.webp'

function Dynamics() {

  const data = [
    {
      id: 1,
      picture: newsImg1,
      createTime: '2024-05-14',
      title: '见贤思齐 励志前行丨2023-2024学年度第二学期',
      descriptions: '伴随着时光匆匆的脚步，承载着勤奋耕耘的喜悦，期中考试已落下帷幕。不辍耕耘，辛勤汗水换来荣誉奖章。为表彰先进、树立榜样，营造浓厚的学习氛围，进一步调动学生的积极性和主动性，2024年5月10日，我校高一年级召开了第二学期期中表彰大会。<br/> 大会在学校报告厅隆重举行，德育处尔主任、德育助理吴老师、高一年级黄级长，高一年级德育干事马老师，以及高一年级全体师生参加了此次盛会。会场气氛热烈而庄重，洋溢着对知识的尊重和对优秀的追求。',
    },
    {
      id: 2,
      picture: newsImg2,
      createTime: '2024-05-14',
      title: '专家引领促成长，潜心学习提质量丨香洲区教师发展中心中学教研部领导莅临我校指导工作',
      descriptions: '',
    },
    {
      id: 3,
      picture: newsImg3,
      createTime: '2024-05-14',
      title: '强师立本赋能成长，以研促教提质增效丨首届大湾区阅读教育研讨暨高中语文优质课观摩...',
      descriptions: '',
    },
    {
      id: 4,
      picture: newsImg4,
      createTime: '2024-01-08',
      title: '翰墨飘香浸校园，妙笔生花绽芳华丨记高中部语文组作文竞赛',
      descriptions: '',
    },
    {
      id: 5,
      picture: newsImg5,
      createTime: '2024-01-08',
      title: '识骗防骗 全民反诈丨校园反诈宣传月主题活动',
      descriptions: '',
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>校园动态</h2>
          <p>School Dynamics</p>
        </div>
        <div className={styles.card}>
          <div className={styles.first}>
            <div className={styles.imgBox}>
              <Image src={data[0].picture} alt={data[0].title}></Image>
              <div className={styles.time}>
                {data[0].createTime}
              </div>
            </div>
            <div className={styles.card_content}>
              <h3>{data[0].title}</h3>
              <p dangerouslySetInnerHTML={{ __html: data[0].descriptions }}></p>
            </div>
          </div>
          <div className={styles.list}>
            <ul>
              {
                data.slice(1, 5).map((item: any) => {
                  return (
                    <li key={item.id}>
                      <div className={styles.imgBox}>
                        <Image src={item.picture} alt=''></Image>
                        <div className={styles.time}>
                          {item.createTime}
                        </div>
                      </div>
                      <div className={styles.li_title}>
                        <h3>{item.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: item.descriptions }}></p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dynamics
