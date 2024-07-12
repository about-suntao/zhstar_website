'use client'
import React, { useState } from 'react'
import List from './list/list'
import Article from './article/article'

function Speech() {
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [article, setArticle] = useState(0)

  const viewDetail = (id: any) => {
    setArticle(id)
    setIsDetail(true)
  }

  const backList = () => {
    setIsDetail(false)
  }

  return (
    <section>
      {
        !isDetail ?
          <List viewDetail={viewDetail}></List> :
          <Article id={article} backList={backList}></Article>
      }
    </section>
  )
}

export default Speech
