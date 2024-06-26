'use client'
import React from 'react'
import Image from 'next/image';
import styles from './banner.module.scss'
import { useRouter } from 'next/navigation';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'
import banner1 from '../../../../public/img/home/banner1.webp'
import banner2 from '../../../../public/img/home/banner2.webp'

SwiperCore.use([Autoplay]);

function Banner() {
  const data = [
    {
      id: 1,
      url: banner1,
      mobileUrl: banner1,
      link: '',
      title: '崇德博学 创新务实',
    }, {
      id: 2,
      url: banner2,
      mobileUrl: banner2,
      link: '',
      title: '崇德博学 创新务实',
    },
  ]
  const router = useRouter()

  const handleRoute = (url: string) => {
    if (url !== '') {
      router.push(url)
    }
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
            data.map((item, index) => {
              return (
                <SwiperSlide key={item.id} onClick={() => handleRoute(item.link)}>
                  <Image className={styles.bannerImg} src={item.url} alt={item.title}></Image>
                  <div className={styles.title}>
                    <h1>{item.title}</h1>
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
