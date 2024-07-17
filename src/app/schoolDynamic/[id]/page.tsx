'use client'
import React, { useState, useEffect } from 'react'
import Article from '../menuTab/article/article'
import { useRouter } from 'next/navigation'

function ArticleDetail({ params }: any) {
  const router = useRouter()
  const backList = () => {
    router.back()
  }

  return (
    <div>
      {params?.id && <Article id={params.id} backList={backList}></Article>}
    </div>
  )
}

export default ArticleDetail
