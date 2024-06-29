import React, { useEffect, useState } from 'react'
import styles from './junior.module.scss'
import Image from 'next/image'
import jImg1 from '../../../../../../public/img/education/team/j1.webp'
import jImg2 from '../../../../../../public/img/education/team/j2.webp'
import jImg3 from '../../../../../../public/img/education/team/j3.webp'
import jImg4 from '../../../../../../public/img/education/team/j4.webp'
import jImg5 from '../../../../../../public/img/education/team/j5.webp'
import jImg6 from '../../../../../../public/img/education/team/j6.webp'
import jImg7 from '../../../../../../public/img/education/team/j7.webp'

import hImg1 from '../../../../../../public/img/education/team/h1.webp'
import hImg2 from '../../../../../../public/img/education/team/h2.webp'
import hImg3 from '../../../../../../public/img/education/team/h3.webp'
import hImg4 from '../../../../../../public/img/education/team/h4.webp'
import hImg5 from '../../../../../../public/img/education/team/h5.webp'
import hImg6 from '../../../../../../public/img/education/team/h6.webp'
import hImg7 from '../../../../../../public/img/education/team/h7.webp'
import hImg8 from '../../../../../../public/img/education/team/h8.webp'
import hImg9 from '../../../../../../public/img/education/team/h9.webp'

function Junior({id}:any) {

  const juniorData:any = [
    {
      id:1,
      picture:jImg1,
      name:'马英博',
      desc:'人生格言是：能力有限，努力无限。',
      subject:'初中体育',
      eduBackground:'大学本科', 
      element:'中共党员',
      jobTitle:'中学二级教师',
      skill:null,
      introduce:'毕业于吉林体育学校，幽默风趣，擅长田径，篮球，健美操等方面教学。2019年-2020年连续两年被授予珠海市羽毛球锦标赛“优秀教练员”称号。'
    },{
      id:2,
      picture:jImg2,
      name:'詹悦',
      desc:'人生格言：滴水石穿，格物致知。',
      subject:'初中数学',
      eduBackground:'硕士研究生', 
      element:'中共党员',
      jobTitle:'',
      skill:null,
      introduce:'毕业于河南科技大学，教学基本功扎实，热爱教育，有责任心，用真心诚心爱心对待每一位学生，尊重学生个性发展，用心引领学生成长，争做孩子心中真正的良师益友。'
    },{
      id:3,
      picture:jImg3,
      name:'尧桢',
      desc:'2016年获得“香洲区优秀阅卷员”称号',
      subject:'初中语文',
      eduBackground:'硕士研究生', 
      element:'',
      jobTitle:'中学一级教师',
      skill:null,
      introduce:'汉语国际教育硕士，毕业于湖南大学。2016年获得“香洲区优秀阅卷员”称号。在我校连续两年担任初三语文教学工作，所教班级的成绩在期末统考中有较大提升，个别班级在区统考中及格率达到100%。'
    },{
      id:4,
      picture:jImg4,
      name:'张渭玲',
      desc:'',
      subject:'初中数学',
      eduBackground:'大学本科', 
      element:'中共党员',
      jobTitle:'',
      skill:null,
      introduce:'毕业于华南师范大学，三级心理咨询师。从教19年来诚信务实，踏实肯干。乐观的我始终保留着一颗童心，我爱教师这个神圣的职业，爱那三尺讲台，更爱那些可爱的孩子们。我相信自己会为学生的健康成长而努力工作，用爱心去浇灌，用真情去感化，用智慧去启迪，用人格去熏陶，用理想去塑造这一个个充满希望与梦想的生命，做一名幸福的老师！'
    },{
      id:5,
      picture:jImg5,
      name:'王琳玲',
      desc:'用真心、爱心、诚心对待每一个学生',
      subject:'初中英语',
      eduBackground:'硕士研究生', 
      element:'',
      jobTitle:'',
      skill:'英语八级',
      introduce:'毕业于英国斯旺西大学英语外语教学专业，热爱教育事业，用真心、爱心、诚心对待每一个学生，坚信教学的艺术不在于传授本领，而在于激励、唤醒和鼓舞学生。'
    },{
      id:6,
      picture:jImg6,
      name:'张佳音',
      desc:'座右铭：快乐学习、快乐成长。',
      subject:'初中英语',
      eduBackground:'大学本科', 
      element:'',
      jobTitle:'',
      skill:'英语八级',
      introduce:'毕业于哈尔滨师范大学英语专业，有多年从事教学的经验，幽默风趣，因材施教，深受学生们的喜爱。'
    },{
      id:7,
      picture:jImg7,
      name:'董晓雨',
      desc:'人生格言：习与智长，优与心成！',
      subject:'初中物理',
      eduBackground:'大学本科', 
      element:'',
      jobTitle:'中学一级教师',
      skill:null,
      introduce:'毕业于黑龙江省牡丹教师范学院。现任珠海市北大希望之星实验学校主任助理，初中年级长。具有18年的初中物理教学经验，在教学中尊重学生个体，注重方式方法的引导，精准把握中考考点，具有丰富的中考冲刺辅导经验。'
    },
  ]

  const highData:any = [
    {
      id:1,
      picture:hImg1,
      name:'宋江峰',
      desc:'座右铭：老吾老以及人之老，幼吾幼以及人之幼。',
      subject:'高中数学',
      eduBackground:'大学本科', 
      element:'',
      jobTitle:'中学一级教师',
      skill:null,
      introduce:'毕业于华中师范大学数学专业，从教25年，经验丰富，现任珠海市北大希望之星实验学校教学主任。19年获得珠海市高考特殊贡献奖。'
    },{
      id:2,
      picture:hImg2,
      name:'赵秋燕',
      desc:'座右铭：不忘初心、砥砺前行。',
      subject:'高中历史',
      eduBackground:'硕士研究生', 
      element:'',
      jobTitle:'中学二级教师',
      skill:null,
      introduce:'毕业于哈尔滨师范大学历史学专业。读研期间连续两年参加高考阅卷工作，曾连续3年担任北大希望之星实验学校年级级长，所带团队在2020届高考创造出本科率47%的佳绩，现任中学部副主任。'
    },{
      id:3,
      picture:hImg3,
      name:'闫淑丽',
      desc:'珠海市语文教研中心中心组成员',
      subject:'高中语文',
      eduBackground:'大学本科', 
      element:'',
      jobTitle:'',
      skill:null,
      introduce:'毕业于北京师范大学汉语言文学专业。现为珠海市语文教研中心中心组成员，曾参加高中语文命题培训，现担任北大希望之星语文教研组长、高二年级长的职务。具有21年的语文教学经验，在语文教学中，将语文素养的培养渗透在有效的阅读和课堂教学之中。对学部的语文教学作出合理性规划，有序推进北大希望之星语文科组的各项教研活动。'
    },{
      id:4,
      picture:hImg4,
      name:'杨光诗',
      desc:'座右铭：相信自己，超越自己！',
      subject:'高中数学',
      eduBackground:'大学本科', 
      element:'',
      jobTitle:'中学二级教师',
      skill:null,
      introduce:'毕业于河北师范大学。教学经验丰富，连续多年带高三，成绩优异！2019年荣获珠海市高考突出贡献奖。2020年被授予“横琴好老师-最佳潜力教师”荣誉称号。'
    },{
      id:5,
      picture:hImg5,
      name:'罗鹏',
      desc:'人生格言：穷开心，勤奋斗!',
      subject:'高中英语',
      eduBackground:'硕士研究生', 
      element:'',
      jobTitle:'英语专业八级',
      skill:null,
      introduce:'外国语言学及应用语言学硕士， 毕业于南华大学，2019年荣获“珠海市优秀教师”称号，且3次荣获“校级优秀教师”称号。在校连续两年担任高三英语教学工作，政绩卓越，助力英语后进生圆大学梦！“The art of teaching lies not in the ability to impart, but in the inspiration to arouse and inspire!”英语教学，长路漫漫，吾将上下求索之！'
    },{
      id:6,
      picture:hImg6,
      name:'唐红花',
      desc:'座右铭：良心教学，爱与教育同在。',
      subject:'高中物理',
      eduBackground:'大学本科 ', 
      element:'',
      jobTitle:'中学二级教师',
      skill:null,
      introduce:'2002年毕业于广西师范大学物理教育专业，幽默风趣，因材施教，深得同学们的喜欢，有多年高三、初三毕业班的执教经验，成绩优异！对学生要求就是“要做就做最好！要争就争第一！”'
    },{
      id:7,
      picture:hImg7,
      name:'魏丹',
      desc:'',
      subject:'高中政治',
      eduBackground:'大学本科', 
      element:'中共党员',
      jobTitle:'中学一级教师',
      skill:null,
      introduce:'中学部文综组教研组长。执教30多年，爱岗敬业，善于带领教师，凝聚集体智慧，发挥科组团队合作精神，以昂扬的精神面貌，做好教育教学工作。2020年高考由历史硕士赵秋燕、政治硕士杨磊及地理硕士李超组成高考备考团队，认真分析学生学习现状，夯实基础、有效提高成绩。经过一年的倾尽全力、奋力拼搏，终于把高三前成绩一直在360分左右徘徊的洪焕庭同学推上490分，高于本科录取线的好成绩。'
    },{
      id:8,
      picture:hImg8,
      name:'王继新',
      desc:'人生格言：立德树人，求实创新',
      subject:'高中历史',
      eduBackground:'硕士研究生', 
      element:'中共党员',
      jobTitle:'中学一级教师',
      skill:null,
      introduce:'毕业于华中师范大学，现任高三年级组长。曾连续多年担任高三历史教师以及毕业班班主任工作，多次被评为校级优秀教师，曾获得珠海市2017年高考突出贡献教师称号。'
    },{
      id:9,
      picture:hImg9,
      name:'隋晓萌',
      desc:'北大希望之星艺体教研组组长',
      subject:'舞蹈',
      eduBackground:'大学本科', 
      element:'',
      jobTitle:'',
      skill:null,
      introduce:'毕业于北京师范大学珠海分校舞蹈学专业。现为珠海市舞蹈工作室美育小组核心成员，现担任北大希望之星艺体教研组组长。习舞12年，舞蹈专业知识扎实，4年教学经验及编导经验。喜欢并善于和孩子打交道，善于与学生合作，发现学生优势因材施教。'
    },
  ]
  const [data,setData] =useState(juniorData)
  useEffect(()=>{
    if (id===2) {
      setData(juniorData)
    } else if (id ===3) {
      setData(highData)
    }
  },[id])
  return (
    <div className={styles.pages}>
      <div className={styles.contianer}>
        <ul>
          {
            data.map((item:any)=>{
              return (
                <li key={item.id}>
                  <div className={styles.picture}>
                    <Image src={item.picture} alt=''></Image>
                  </div>
                  <div className={styles.introduce}>
                    <h3>{item.name}</h3>
                    <p className={styles.desc}>{item.desc}</p>
                    {
                      item.subject &&  
                      <div className={styles.list}>
                        <p><span>任教科目：</span>{item.subject}</p>
                      </div>
                    }
                     {
                      item.eduBackground &&  
                      <div className={styles.list}>
                        <p><span>学历：</span>{item.eduBackground}</p>
                      </div>
                    } {
                      item.element &&  
                      <div className={styles.list}>
                        <p><span>成分：</span>{item.element}</p>
                      </div>
                    } {
                      item.jobTitle &&  
                      <div className={styles.list}>
                        <p><span>职称：</span>{item.jobTitle}</p>
                      </div>
                    } {
                      item.skill &&  
                      <div className={styles.list}>
                        <p><span>专业技能：</span>{item.skill}</p>
                      </div>
                    } {
                      item.introduce &&  
                      <div className={styles.list}>
                        <p><span>简介：</span>{item.introduce}</p>
                      </div>
                    }
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

export default Junior
