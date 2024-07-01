import React from 'react'
import styles from './speech.module.scss'

import { Pagination, ConfigProvider } from "antd";
import type { PaginationProps } from 'antd';
import zhCN from 'antd/locale/zh_CN';

function Speech() {

  const data = [
    {
      id: 1,
      title: '弘扬五四精神，做一名遵纪守法的中学生',
      createTime: '2022-05-16',
    }, {
      id: 2,
      title: '关注食品安全，加强疾病防控',
      createTime: '2022-05-16',
    }, {
      id: 3,
      title: '但行耕耘，致敬每一位劳动者',
      createTime: '2022-05-16',
    }, {
      id: 4,
      title: '宣传防溺水知识',
      createTime: '2022-05-16',
    }, {
      id: 5,
      title: '感恩母亲',
      createTime: '2022-05-16',
    }, {
      id: 6,
      title: '让雷锋精神永驻校园',
      createTime: '2022-05-16',
    }
  ]

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };

  return (
    <section className={styles.pages}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {
            data.map((item: any) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.createTime}</p>
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
    </section>
  )
}

export default Speech
