'use client'
import React, { useState, useEffect } from 'react'
import styles from './dynamics.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest';
import { useRouter } from 'next/navigation';

function Dynamics() {
  const router = useRouter()
  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const params = {
      pageNum: 1,
      pageSize: 5,
    }
    const res: any = await fetchRequest.get(`/icon/web/news/queryByPage`, params);
    setData(res.data.list)
    setDataLoaded(true); // 设置数据已加载
  }

  const handleRoute = (id: number) => {
    router.push(`/schoolDynamic/${id}`)
  }

  useEffect(() => {
    getData()
  }, []);

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>校园动态</h2>
          <p>School Dynamics</p>
        </div>
        <div className={styles.card}>
          <div className={styles.first} onClick={() => handleRoute(data[0].id)}>
            <div className={styles.imgBox}>
              <Image src={data[0].picture} alt={data[0].title} width={600} height={600} priority></Image>
              <div className={styles.time}>
                {data[0].createTime}
              </div>
            </div>
            <div className={styles.card_content}>
              <h3>{data[0].title}</h3>
              <p dangerouslySetInnerHTML={{ __html: data[0].description }}></p>
            </div>
          </div>
          <div className={styles.list}>
            <ul>
              {
                data.slice(1, 5).map((item: any) => {
                  return (
                    <li key={item.id} onClick={() => handleRoute(item.id)}>
                      <div className={styles.imgBox}>
                        <Image src={item?.picture} alt='' width={600} height={600} priority></Image>
                        <div className={styles.time}>
                          {item?.createTime}
                        </div>
                      </div>
                      <div className={styles.li_title}>
                        <h3>{item?.title}</h3>
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
