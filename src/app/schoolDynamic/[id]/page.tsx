'use client'
import React, { useState, useEffect } from 'react'
import Article from '../menuTab/article/article'
import { useRouter } from 'next/navigation'

function ArticleDetail({ params }: any) {
  const router = useRouter()
  const [articleId, setArticleId] = useState<any>(null)

  const backList = () => {
    router.back()
  }

  useEffect(() => {
    setArticleId(params.id)
  }, [])

  return (
    <div>
      {articleId && <Article id={articleId} backList={backList}></Article>}
    </div>
  )
}

export default ArticleDetail
