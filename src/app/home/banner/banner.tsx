'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import styles from './banner.module.scss'
import { useRouter } from 'next/navigation';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'
import fetchRequest from '@/utils/fetchRequest';

SwiperCore.use([Autoplay]);

function Banner() {

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态


  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/slideshow/queryAll');
    setDataLoaded(true); // 设置数据已加载
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, []);

  const router = useRouter()

  const handleRoute = (item: any) => {
    if (item.interiorUrl && item.interiorUrl !== '') {
      router.push(item.interiorUrl)
    } else if (item.withoutUrl && item.withoutUrl !== '') {
      window.open(item.withoutUrl, '_blank');
    }
  }

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }


  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {
            data.map((item: any, index: any) => {
              return (
                <SwiperSlide key={item.id} onClick={() => handleRoute(item)}>
                  <Image className={styles.bannerImg} src={item.picture} alt={item.name} width={1920} height={800}></Image>
                  <div className={styles.title}>
                    <h1>{item.name}</h1>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Banner
