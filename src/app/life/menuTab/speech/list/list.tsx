import React, { useState, useEffect } from 'react'
import styles from './list.module.scss'
import fetchRequest from '@/utils/fetchRequest';

import { Pagination, ConfigProvider } from "antd";
import type { PaginationProps } from 'antd';
import zhCN from 'antd/locale/zh_CN';

function List({ viewDetail }: any) {
  const [data, setData] = useState([])
  const [searchParams, setSearchParams] = useState(
    {
      pageNum: 1,
      pageSize: 10,
      total: 0,
    }
  );

  const getData = async (params: any) => {
    const res: any = await fetchRequest.get('/icon/web/lecture/queryByPage', params);
    setData(res.data.list)
    setSearchParams(prevParams => ({
      ...prevParams,
      pageNum: res.data?.pageNum,
      pageSize: res.data?.pageSize,
      total: res.data?.total,
    }))
  }

  useEffect(() => {
    getData(searchParams)
  }, []);

  const onChange: PaginationProps['onChange'] = (page: any, pageSize: any) => {
    setSearchParams(prevParams => ({
      ...prevParams,
      pageNum: page,
      pageSize: pageSize,
    }))
    getData({
      ...searchParams,
      pageNum: page,
      pageSize: pageSize,
    })
  };

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {
            data.map((item: any) => {
              return (
                <li key={item.id} onClick={() => viewDetail(item.id)}>
                  <h3>{item.title}</h3>
                  <p>{item.createTime}</p>
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
    </section>
  )
}

export default List
