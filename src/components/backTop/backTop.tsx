'use client'
import React from 'react'
import styles from './backTop.module.scss'

import { ArrowUpOutlined } from '@ant-design/icons';

function BackTop() {

  const backTop = () => {
    let timer = setInterval(() => {
      //获取滑动的距离
      let top = document.documentElement.scrollTop || document.body.scrollTop
      window.scrollTo(0, top - top / 5) //设置返回时 是缓慢带有动画的
      if (top === 0) {
        clearInterval(timer)
      }
    }, 30)
  }

  return (
    <div className={styles.sideBar}>
      <button onClick={backTop}>
        <ArrowUpOutlined />
      </button>
    </div>
  )
}

export default BackTop
