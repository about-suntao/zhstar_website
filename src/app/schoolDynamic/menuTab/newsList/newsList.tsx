import React from 'react'
import styles from './newsList.module.scss'
import Image from 'next/image'

import { Pagination, ConfigProvider } from "antd";
import type { PaginationProps } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import arrowImg from '../../../../../public/img/schoolDynamic/arrow.webp'

function NewsList({ list }: any) {

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
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
                    <Image src={item.picture} alt=''></Image>
                  </div>
                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <div className={styles.desc}>
                      <p dangerouslySetInnerHTML={{ __html: item.describe }}></p>
                    </div>
                    <div className={styles.detail}>
                      <div className={styles.time}>
                        <p>{item.createTime}</p>
                      </div>
                      <div className={styles.btn}>
                        <button>
                          <Image src={arrowImg} alt=''></Image>
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
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}

export default NewsList
