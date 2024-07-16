'use client'
import React, { useState, useEffect } from 'react'
import styles from './teacherTeam.module.scss'
import Image from 'next/image'

import PrimarySchool from './primarySchool/primarySchool'
import Junior from './junior/junior'
import fetchRequest from '@/utils/fetchRequest';

function TeacherTeam() {

    const [data, setData] = useState<any>([])
    const [dataLoaded, setDataLoaded] = useState<boolean>(false); // 新增状态
    const [active, setActive] = useState(1)

    const MenuData = [
        {
            id: 1,
            title: '小学部教师',
        }, {
            id: 2,
            title: '初中部教师',
        }, {
            id: 3,
            title: '高中部教师',
        },
    ]

    const getData = async (activeId: number) => {
        const res = await fetchRequest.get('/icon/web/teacher/queryAll', { type: activeId });
        setDataLoaded(true); // 设置数据已加载
        setData(res.data)
    }

    const changeMenu = (item: any) => {
        setActive(item.id)
        getData(item.id)
    }

    useEffect(() => {
        getData(1)
    }, []);

    // 确保获取数据后再加载
    if (!dataLoaded) {
        return null;
    }
    return (
        <div className={styles.pages}>
            <div className={styles.container}>
                <ul className={styles.menu}>
                    {
                        MenuData.map((item: any) => {
                            return (
                                <li
                                    className={`${active === item.id ? styles.activeMenu : ''}`}
                                    key={item.id}
                                    onClick={() => changeMenu(item)}>
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={styles.content}>
                    {
                        active === 1 ?
                            <PrimarySchool data={data}></PrimarySchool>
                            : active === 2 ?
                                <Junior data={data}></Junior>
                                : <Junior data={data}></Junior>
                    }
                </div>
            </div>
        </div>
    )
}

export default TeacherTeam
