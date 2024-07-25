import React, { useState, useRef, useEffect } from 'react'
import styles from './schedule.module.scss'
import Image from 'next/image'
import fetchRequest from '@/utils/fetchRequest'

function Schedule() {


  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态


  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/surroundings/queryAll', { type: 2 });
    setDataLoaded(true); // 设置数据已加载
    setData(res.data[0])

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
        <div className={styles.table}>
          <Image src={data?.img} alt='' width={2000} height={5000} priority></Image>
        </div>
      </div>
    </div>
  )
}

export default Schedule
