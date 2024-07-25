'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from './environmentList.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules'

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

SwiperCore.use([Navigation]);

function EnvironmentList() {

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/surroundings/queryAll', { type: 1 });
    setDataLoaded(true); // 设置数据已加载
    setData(res.data)

  }
  useEffect(() => {
    getData()
  }, []);

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

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
                      <Image src={item.img} alt='' width={1000} height={1000} priority={true}></Image>
                    </div>
                    <div className={styles.card_title}>
                      {item.name}
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
