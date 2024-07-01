'use client'
import React, { useRef } from 'react'
import styles from './environmentList.module.scss'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules'

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import E1 from '../../../../../../public/img/life/E1.webp'
import E2 from '../../../../../../public/img/life/E2.webp'
import E3 from '../../../../../../public/img/life/E3.webp'
import E4 from '../../../../../../public/img/life/E4.webp'
import E5 from '../../../../../../public/img/life/E5.webp'
import E6 from '../../../../../../public/img/life/E6.webp'
import E7 from '../../../../../../public/img/life/E7.webp'
import E8 from '../../../../../../public/img/life/E8.webp'
import E9 from '../../../../../../public/img/life/E9.webp'
import E10 from '../../../../../../public/img/life/E10.webp'
import E11 from '../../../../../../public/img/life/E11.webp'
import E12 from '../../../../../../public/img/life/E12.webp'

SwiperCore.use([Navigation]);

function EnvironmentList() {

  const data = [
    {
      id: 1,
      title: '学校教室',
      picture: E1,
    }, {
      id: 2,
      title: '物理教室',
      picture: E2,
    }, {
      id: 3,
      title: '化学教室',
      picture: E3,
    }, {
      id: 4,
      title: '美术教室',
      picture: E4,
    }, {
      id: 5,
      title: '计算机教室',
      picture: E5,
    }, {
      id: 6,
      title: '音乐教室',
      picture: E6,
    }, {
      id: 7,
      title: '舞蹈教室',
      picture: E7,
    }, {
      id: 8,
      title: '学校食堂',
      picture: E8,
    }, {
      id: 9,
      title: '图书馆',
      picture: E9,
    }, {
      id: 10,
      title: '室内体育馆',
      picture: E10,
    }, {
      id: 11,
      title: '学校食堂',
      picture: E11,
    }, {
      id: 12,
      title: '学生宿舍',
      picture: E12,
    }
  ]

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        {/* 按钮放swiper前生效 */}
        <div className={styles.btnGroup}>
          <button ref={prevRef}><LeftOutlined /></button>
          <button ref={nextRef}><RightOutlined /></button>
        </div>
        <div className={styles.picture}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className={styles.swiperBox}
            onInit={(swiper: any) => {
              // 绑定自定义按钮
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {
              data.map((item: any) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles.card_img}>
                      <Image src={item.picture} alt='' width={1000} height={1000} priority={true}></Image>
                    </div>
                    <div className={styles.card_title}>
                      {item.title}
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

      </div>
    </section>
  )
}

export default EnvironmentList
