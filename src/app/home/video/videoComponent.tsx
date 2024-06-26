'use client'
import React, { useState, useRef } from 'react'
import styles from './videoComponent.module.scss'
import Image from 'next/image'
import { Modal } from 'antd';

import VideoImg from '../../../../public/img/home/videoImg.png'
import playImg from '../../../../public/img/home/play.webp'

function VideoComponents() {

  // 视频弹窗
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRefPc = useRef(null)

  const openDialog = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    if (videoRefPc.current) {
      let player: any = videoRefPc.current
      player.pause()
    }
  };

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.backImg}>
          <Image src={VideoImg} alt=''></Image>
        </div>
        <div className={styles.video} onClick={() => openDialog()}>
          <h2>Watch the Campus Life</h2>
          <div className={styles.triangular}>
            <Image src={playImg} alt=''></Image>
          </div>
        </div>
        <div id="1" className={styles.videoDialog}>
          <Modal
            open={isModalOpen}
            getContainer={false}
            onCancel={handleCancel}
            title={null}
            footer={null}
            centered={true}
            keyboard={true}
            maskClosable={true}
          >
            <div className={styles.videoContent}>
              <video autoPlay controls loop ref={videoRefPc} id="1">
                <source src='https://icon-hsd.oss-cn-hangzhou.aliyuncs.com/2024/06/26/954_video(1).mp4' />
              </video>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default VideoComponents

