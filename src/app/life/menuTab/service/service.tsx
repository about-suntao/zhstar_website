import React from 'react'
import styles from './service.module.scss'
function Service() {
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>生活服务</h2>
          <p>Domestic services</p>
        </div>
        <div className={styles.desc}>
          <p>我校膳食中心管理工作以规范化管理、标准化管理、热情服务、质量第一作为宗旨。每天供应新鲜蔬菜和水果，根据不同年龄段的孩子们成长中所需求的优质蛋白质、维生素、矿物质、膳食纤维等营养素，不断提高服务质量，严格操作规程。</p>
        </div>
        <div className={styles.picture}>
          
        </div>
      </div>
    </div>
  )
}

export default Service
