'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import type { MenuProps } from 'antd';

import styles from './page.module.scss'

import logo from '../../../../public/img/home/logo.webp'

type MenuItem = Required<MenuProps>['items'][number];

function Header() {

  const [current, setCurrent] = useState('home');
  const path = usePathname()

  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }
  const items: MenuItem[] = [
    {
      label: <Link href="/">首页</Link>,
      key: 'home',
    },
    {
      label: '学校概况',
      key: 'school',
    },
    {
      label: '学部建设',
      key: 'team',
      children: [
        { label: (<Link href="/team/management">管理团队</Link>), key: '/team/management' },
        { label: '教学团队', key: '' },
      ],
    },
    {
      label: (<Link href="/course">教育教学</Link>),
      key: '/course',
    }, {
      label: (<Link href="/international">校园生活</Link>),
      key: '/international',
    },
    {
      label: (<Link href="/campusClass">学校动态</Link>),
      key: '/campusClass',
    },
    {
      label: (<a onClick={() => openNewWindow('https://mp.weixin.qq.com/s/C2ealJO5Rd4JqakrxUECdw')}>招生报名</a>),
      key: 'recruitStudent',
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };




  useEffect(() => {
    if (path === '/') {
      setCurrent('home')
    } else {
      setCurrent(path)
    }
  }, [path])

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoImg}>
          <Image src={logo} alt=''></Image>
        </div>
        <div className={styles.menu}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
      </div>
    </div>
  )
}

export default Header
