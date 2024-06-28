import React from 'react'
import styles from './profile.module.scss'
import profileImg from '../../../../public/img/school/profile.png'
import Image from 'next/image'

function Profile() {
  return (
    <div className={styles.pages}>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>
                    <h2>学校简介</h2>
                    <p>School Profile</p>
                </div>
                <div className={styles.desc}>
                    <p>珠海市希望之星实验学校成立于1997年，隶属北大青鸟文教集团，是一所集小学、初中、高中为一体的现代化寄宿制、封闭式学校，珠海市第一所市一级民办学校。</p>
                    <p>学校位于珠海市鹤洲新区筹备组社会事业局十字门中央商务区，邻濠江水与澳门隔河相望，距离中国最繁忙的口岸拱北口岸5分钟车程，到横琴自贸区5分钟车程，公交巴士、城轨延伸线在学校附近设有站点，交通便利，地理位置优越。学校环境优美、绿树成荫、鲜花盛开，是读书学习的理想之地。 学校一切从学生的实际出发，为每个学生定制不同的学习目标和方向，开展量身定制教学及有针对性辅导，实现“低进高出，高进优出”，为莘莘学子梦想腾飞插上翅膀。</p>
                </div>
            </div>
            <div className={styles.right}>
                <Image src={profileImg} alt='学校简介'></Image>
            </div>
        </div>
    </div>
  )
}

export default Profile
