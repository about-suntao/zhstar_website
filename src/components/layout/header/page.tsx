'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import type { MenuProps } from 'antd';
import fetchRequest from '@/utils/fetchRequest'

import styles from './page.module.scss'

import logo from '../../../../public/img/home/logo.webp'

type MenuItem = Required<MenuProps>['items'][number];

function Header() {

  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const [current, setCurrent] = useState('home');
  const path = usePathname()

  const [open, setOpen] = useState(false);

  const [data, setData] = useState<any>([])
  const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态

  const getData = async () => {
    const res: any = await fetchRequest.get(`/icon/web/url/queryAll`);
    setData(res.data)
    setDataLoaded(true);
  }

  function openNewWindow(url: string) {
    window.open(url, '_blank');
  }
  const items: MenuItem[] = [
    {
      label: <Link href="/">首页</Link>,
      key: 'home',
    },
    {
      label: (<Link href="/school">学校概况</Link>),
      key: '/school',
    },
    {
      label: (<Link href="/department">学部建设</Link>),
      key: '/department',
    },
    {
      label: (<Link href="/education">教育教学</Link>),
      key: '/education',
    }, {
      label: (<Link href="/life">校园生活</Link>),
      key: '/life',
    },
    {
      label: (<Link href="/schoolDynamic">学校动态</Link>),
      key: '/schoolDynamic',
    },
    {
      label: '招生报名',
      key: '/recruitStudent',
      children: [
        {
          label: (<a onClick={() => openNewWindow(`${data[0]?.url}`)}>{data[0]?.name}</a>),
          key: 'recruitStudent',
        }, {
          label: (<a onClick={() => openNewWindow(`${data[1]?.url}`)}>{data[1]?.name}</a>),
          key: 'apply',
        },
      ]
    },

  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  const onClose = () => {
    setOpen(false);
  };

  const openDrawer = () => {
    setOpen(!open);
  }

  useEffect(() => {
    if (path === '/') {
      setCurrent('home')
    } else {
      setCurrent(path)
    }
  }, [path])

  // menu组件小于768隐藏后，放大不会重载，解决这个问题
  useEffect(() => {
    getData()
    const handleResize = () => {
      setIsMenuVisible(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 确保获取数据后再加载
  if (!dataLoaded) {
    return null;
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoImg}>
          <Image src={logo} alt=''></Image>
        </div>
        <div className={styles.menu}>
          {isMenuVisible && (<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />)}
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.logoImg}>
          <Image src={logo} alt=''></Image>
        </div>
        <div className={styles.menu} >
          <MenuOutlined onClick={openDrawer} />
        </div>
        <div className={styles.mobileNav} style={{ display: open ? '' : 'none' }}>
          <Drawer
            placement="right"
            open={open}
            closable={false}
            getContainer={false}
            onClose={onClose}
          >
            <div className={styles.drawerNav}>
              <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Header
