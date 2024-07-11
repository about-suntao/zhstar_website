'use client'
import React, { useState, useEffect } from 'react'
import styles from './newsList.module.scss'
import Image from 'next/image'

import { Pagination, ConfigProvider } from "antd";
import type { PaginationProps } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import fetchRequest from '@/utils/fetchRequest';

import arrowImg from '../../../../../public/img/schoolDynamic/arrow.webp'

function NewsList({ typeId, viewDetail }: any) {

  const [list, setList] = useState([])
  const [searchParams, setSearchParams] = useState(
    {
      pageNum: 1,
      pageSize: 10,
      total: 0,
      typeId: typeId,
    }
  );

  const getList = async (params: any) => {
    const res: any = await fetchRequest.get('/icon/web/news/queryByPage', params);
    setList(res.data.list)
    setSearchParams(prevParams => ({
      ...prevParams,
      pageNum: res.data?.pageNum,
      pageSize: res.data?.pageSize,
      total: res.data?.total,
    }))
  }

  useEffect(() => {
    getList({ ...searchParams, typeId: typeId })
  }, [typeId]);

  const onChange: PaginationProps['onChange'] = (page: any, pageSize: any) => {
    setSearchParams(prevParams => ({
      ...prevParams,
      pageNum: page,
      pageSize: pageSize,
    }))
    getList({
      ...searchParams,
      pageNum: page,
      pageSize: pageSize,
    })
  };

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {
            list.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className={styles.cover}>
                    <Image src={item.picture} alt='' width={600} height={600} priority></Image>
                  </div>
                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <div className={styles.desc}>
                      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.time}>
                        <p>{item.createTime}</p>
                      </div>
                      <div className={styles.btn}>
                        <button onClick={() => viewDetail(item.id)}>
                          <Image src={arrowImg} alt='' width={100} height={100} priority></Image>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.pagination}>
          <ConfigProvider locale={zhCN}>
            <Pagination
              showQuickJumper
              showSizeChanger
              total={searchParams.total}
              current={searchParams.pageNum}
              defaultCurrent={searchParams.pageNum}
              pageSize={searchParams.pageSize}
              showTotal={(total) => `总共 ${total} 条`}
              onChange={onChange}
            />
          </ConfigProvider>
        </div>
      </div>
    </div >
  )
}

export default NewsList
