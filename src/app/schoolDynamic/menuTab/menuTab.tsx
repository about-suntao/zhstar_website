'use client'
import React, { useState } from 'react'
import styles from './menuTab.module.scss'
import Image from 'next/image'

import NewsList from './newsList/newsList'
import { describe } from 'node:test'

import ImgD1 from '../../../../public/img/schoolDynamic/d1.webp'
import ImgD2 from '../../../../public/img/schoolDynamic/d2.webp'
import ImgD3 from '../../../../public/img/schoolDynamic/d3.webp'
import ImgD4 from '../../../../public/img/schoolDynamic/d4.webp'
import ImgD5 from '../../../../public/img/schoolDynamic/d5.webp'

import ImgR1 from '../../../../public/img/schoolDynamic/r1.webp'

import ImgN1 from '../../../../public/img/schoolDynamic/n1.webp'
import ImgN2 from '../../../../public/img/schoolDynamic/n2.webp'
import ImgN3 from '../../../../public/img/schoolDynamic/n3.webp'
import ImgN4 from '../../../../public/img/schoolDynamic/n4.webp'
import ImgN5 from '../../../../public/img/schoolDynamic/n5.webp'



function MenuTab() {
  const [activeMenu, setActiveMenu] = useState(1)

  const data = [
    {
      id: 1,
      title: '校园动态',
    }, {
      id: 2,
      title: '教育新闻',
    }, {
      id: 3,
      title: '荣誉台',
    },
  ]

  const listData = [
    [
      {
        id: 1,
        picture: ImgD1,
        title: '见贤思齐 励志前行丨2023-2024学年度第二学期高一期中表彰大会',
        describe: '伴随着时光匆匆的脚步，承载着勤奋耕耘的喜悦，期中考试已落下帷幕。不辍耕耘，辛勤汗水换来荣誉奖章。为表彰先进、树立榜样，营造浓厚的学习氛围，进一步调动学生的积极性和主动性，2024年5月10日，我校高一年级召开了第二学期期中表彰大会。<br/> 大会在学校报告厅隆重举行，德育处尔主任、德育助理吴老师、高一年级黄级长，高一年级德育干事马老师，以及高一年级全体师生参加了此次盛会。会场气氛热烈而庄重，洋溢着对知识的尊重和对...',
        createTime: '2024-05-14',
      }, {
        id: 2,
        picture: ImgD2,
        title: '专家引领促成长，潜心学习提质量丨香洲区教师发展中心中学教研...',
        describe: '教育者唯有明确自身的教育使命，激活发展的内生动力，积极提升自身的业务素质和政治站位，提高思维的开放度和包容度，方能在教育实践中笃行致远，臻于至善。<br/> 为了解我校初中各学科教学情况，促进我校初中教学质量有更大提升，指导我校初三中考复习备考工作，香洲区教师发展中心教研部于 5 月 9 日上午莅临我校进行全学科调研和指导。<br/> 校长助理兼义教部主任董晓雨向莅临我校指导工作的各位教研员表示热烈欢迎，并真诚感谢教研部...',
        createTime: '2024-05-14',
      }, {
        id: 3,
        picture: ImgD3,
        title: '强师立本赋能成长，以研促教提质增效丨首届大湾区阅读教育研讨...',
        describe: '教育者唯有明确自身的教育使命，激活发展的内生动力，积极提升自身的业务素质和政治站位，提高思维的开放度和包容度，方能在教育实践中笃行致远，臻于至善。 为了解我校初中各学科教学情况，促进我校初中教学质量有更大提升，指导我校初三中考复习备考工作，香洲区教师发展中心教研部于 5 月 9 日上午莅临我校进行全学科调研和指导。 校长助理兼义教部主任董晓雨向莅临我校指导工作的各位教研员表示热烈欢迎，并真诚感谢教研部...',
        createTime: '2024-05-14',
      }, {
        id: 4,
        picture: ImgD4,
        title: '翰墨飘香浸校园，妙笔生花绽芳华丨记高中部语文组作文竞赛',
        describe: '伴随着时光匆匆的脚步，承载着勤奋耕耘的喜悦，期中考试已落下帷幕。不辍耕耘，辛勤汗水换来荣誉奖章。为表彰先进、树立榜样，营造浓厚的学习氛围，进一步调动学生的积极性和主动性，2024年5月10日，我校高一年级召开了第二学期期中表彰大会。 大会在学校报告厅隆重举行，德育处尔主任、德育助理吴老师、高一年级黄级长，高一年级德育干事马老师，以及高一年级全体师生参加了此次盛会。会场气氛热烈而庄重，洋溢着对知识的尊重和对...',
        createTime: '2024-01-08 ',
      }, {
        id: 5,
        picture: ImgD5,
        title: '识骗防骗 全民反诈丨校园反诈宣传月主题活动',
        describe: '电信诈骗是一种常见的犯罪行为，它通过电话、短信等方式进行欺诈和非法活动。这种犯罪行为的危害性非常大，不仅会对受害者造成经济损失，还会对受害者的心理和精神健康产生负面影响。<br/> 提高学生对诈骗行为的警觉性，并采取措施防止自己成为诈骗的受害者，为此义教部开展反诈主题教育活动，希望通过各班级这个大群体，发挥一个学生带动一个家庭，一个家庭影响身边一群人，扩大宣传效应，切实织密“家校社”协同教育网络，从而起到防范电信诈骗宣传教育作用。',
        createTime: '2024-01-08',
      }
    ], [
      {
        id: 1,
        picture: ImgN1,
        title: '珠海市人大常委会委员一行调研希望之星实验学校',
        describe: '2022年11月7日下午，珠海市人大常委会委员王小勤、朱少儿同志一行莅临珠海市希望之星实验学校，开展民办学校建设发展调研工作。<br/> 校长冯卫新同志代表全校师生对调研领导一行的到来表示热烈的欢迎，常务副校长杨永明同志等学校领导班子成员分别汇报了学校的办学历史、办学条件、建设规模以及师资力量、课后服务，以及学校未来办学方向、目前学校发展过程中遇到的困惑等情况。',
        createTime: '2022-11-09',
      }, {
        id: 2,
        picture: ImgN2,
        title: '珠海市希望之星实验学校2022年普通高中指标生资格信息表公示',
        describe: '珠海市希望之星实验学校2022年普通高中指标生资格信息表公示 <br/> 学校代码 中学名称 序号姓名 性别准考 证号是否 符合指标生资格 不符合指标生资格 原因 30001 珠海市希望之星实验学校 1 陈婷女 300010037 否 户籍 30001 珠海市希望之星实验学校 2 罗钰淳 女 300010031 否 户籍',
        createTime: '2022-05-13',
      }, {
        id: 3,
        picture: ImgN3,
        title: '珠海市希望之星实验学校中考符合报考公办普通高中条件的 随迁...',
        describe: '珠海市希望之星实验学校中考符合报考公办普通高中条件的随迁子女考生名单公示 学校代码 中学名称 序号姓名 性别准考 证号是否 符合指标生资格 不符合指标生资格 原因 30001珠海市希望之星实验学校1陈婷女300010037初三1班30001珠海市希望之星实验学校2罗钰淳女300010031初三1班 30001珠海市希望之星实验学校3周子颖女300010046初三1班',
        createTime: '2022-05-11',
      }, {
        id: 4,
        picture: ImgN4,
        title: '做阅读的引路人，让学生爱上阅读',
        describe: '没有一艘船能像一本书<br/> 也没有一匹马能像<br/> 一页跳动的诗行那样 — — <br/> 把人带向远方。<br/> ...',
        createTime: '2021-04-28',
      }, {
        id: 5,
        picture: ImgN5,
        title: '三尺讲台，魅力绽放——记高一年级英语公开课',
        describe: 'Education is not the filling of a pail but the lighting of a fire. 教育不是注满一桶水，而是点燃一把火<br/>                                                     ——题记<br/> 为进一步落实新课程理念，深化课堂教学改革，建立以教研促教学，教学导教研的互动模式，我校英语组的教研活动依计划正如火如荼地进行着......本周李薛燕和彭琪瑶两位年轻教师，开展了新教材...',
        createTime: '2021-04-28 ',
      }
    ], [
      {
        id: 1,
        picture: ImgR1,
        title: '学校荣誉台',
        describe: '2019年11月16日第二届珠海市中小学青年教师教学能力大赛高中教育组高中历史专业二等奖获得者张云<br/> 2019年珠海市优秀教师-罗鹏 <br/> 2020年“横琴好老师”最佳潜力奖获得者-杨光诗<br/>  2020年“横琴好老师”最美耕耘奖获得者-张杜梅',
        createTime: '2021-04-27',
      }
    ],
  ]

  const [list, setList] = useState(listData[0])

  const changeMenu = (id: number) => {
    setActiveMenu(id)
    setList(listData[id - 1])
  }

  return (
    <div className={styles.pages}>
      <div className={styles.menu}>
        <ul>
          {
            data.map((item) => {
              return (
                <li
                  onClick={() => changeMenu(item.id)}
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
        <NewsList list={list}></NewsList>
      </div>
    </div>
  )
}

export default MenuTab
