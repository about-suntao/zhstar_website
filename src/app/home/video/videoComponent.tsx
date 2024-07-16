'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from './videoComponent.module.scss'
import Image from 'next/image'
import { Modal } from 'antd';
import fetchRequest from '@/utils/fetchRequest';


import VideoImg from '../../../../public/img/home/videoImg.png'
import playImg from '../../../../public/img/home/play.webp'

function VideoComponents() {

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  // 视频弹窗
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRefPc = useRef(null)


  const getData = async () => {
    const res = await fetchRequest.get('/icon/web/home/video/queryAll');
    setDataLoaded(true); // 设置数据已加载
    setData(res.data[0])
  }

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

  useEffect(() => {
    getData()
  }, []);

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.backImg}>
          <Image src={data.picture} alt='' width={1000} height={600} priority></Image>
        </div>
        <div className={styles.video} onClick={() => openDialog()}>
          <h2>{data.name}</h2>
          <div className={styles.triangular}>
            <Image src={playImg} alt=''></Image>
          </div>
        </div>
        <div className={styles.desc}>
          <p>{data.description}</p>
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
                <source src={data.url} />
              </video>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default VideoComponents

