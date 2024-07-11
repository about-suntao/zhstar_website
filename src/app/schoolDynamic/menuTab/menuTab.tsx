'use client'
import React, { useState, useEffect } from 'react'
import styles from './menuTab.module.scss'
import fetchRequest from '@/utils/fetchRequest';

import NewsList from './newsList/newsList'
import Article from './article/article';

function MenuTab() {
  const [activeMenu, setActiveMenu] = useState<any>({})
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态
  const [data, setData] = useState<any>([])

  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [article, setArticle] = useState(0)

  const getData = async () => {
    const res: any = await fetchRequest.get('/icon/web/newsType/queryByPage');
    setData(res.data?.list)
    setActiveMenu(res.data.list[0])
    setDataLoaded(true)
  }

  useEffect(() => {
    getData()
  }, []);

  const changeMenu = (data: number) => {
    setActiveMenu(data)
    setIsDetail(false)
  }

  const viewDetail = (id: any) => {
    setArticle(id)
    setIsDetail(true)
  }

  const backList = () => {
    setIsDetail(false)
  }

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <div className={styles.pages}>
      <div className={styles.menu}>
        <ul>
          {
            data.map((item: any) => {
              return (
                <li
                  className={`${activeMenu.id === item.id ? styles.activeMenu : ''}`}
                  key={item.id}>
                  <button onClick={() => changeMenu(item)}>{item.name}</button>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className={styles.tabs}>
        {
          !isDetail ?
            <NewsList typeId={activeMenu.id} viewDetail={viewDetail}></NewsList> :
            <Article activeMenu={activeMenu} id={article} backList={backList}></Article>
        }
      </div>
    </div>
  )
}

export default MenuTab
