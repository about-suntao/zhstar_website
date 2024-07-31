import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'


async function getData(id: number) {
  const res = await fetchRequest.get(`/icon/web/menu/${id}`, null, { cache: 'no-store' });
  return res.data
}

async function Banner({ id }: any) {
  const data = await getData(id)
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.backImg}>
          <Image src={data?.picture} alt='' width={1920} height={600}></Image>
        </div>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>{data?.name}</h1>
              <p>{data?.nameEnglish}</p>
            </div>
            <div className={styles.introduce}>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

export const revalidate = 60;

