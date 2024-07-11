'use client'
import React, { useState, useEffect } from 'react'
import styles from './article.module.scss'
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import fetchRequest from '@/utils/fetchRequest';


import backImg from '../.././../../../public/img/schoolDynamic/back.webp'

function Article({ id, activeMenu, backList }: any) {
  const [data, setData] = useState<any>([])
  const getData = async (articleId: number) => {
    const res: any = await fetchRequest.get(`/icon/web/news/${articleId}`);
    setData(res.data)
  }

  useEffect(() => {
    getData(id)
  }, [id]);
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.position}>
          <Breadcrumb
            separator=">"
            items={[
              { title: '当前位置' },
              { title: activeMenu.name },
              { title: data?.title }
            ]}
          />
        </div>
        <div className={styles.article}>
          <div className={styles.back}>
            <button onClick={() => backList()}>
              <Image src={backImg} alt=''></Image>
            </button>
          </div>
          <div className={styles.article_info}>
            <h2>{data?.title}</h2>
            <p>发布时间：{data?.createTime}</p>
          </div>
          <div className={styles.renderArticle} >
            <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
